let map2D, map3D, projection, path, currentView = '2D';
let currentTooltip = null;  // Track the currently opened tooltip
let detailedPanel = null;  // Track the currently opened detailed panel
let selectedCountryId = null; // Track the currently selected country's ID
const width = window.innerWidth;
const height = window.innerHeight;
let rotation = [0, 0];  // Store the rotation angles for the globe

const mapRightBuffer = 50;  // Buffer between the maps and the right edge of the screen
const mapTopBuffer = -10;    // Buffer between the 2D map and the top edge of the screen
const panelBuffer = 30;     // Buffer between the panel and the left edge of the screen
const panelWidth = width / 3; // Width of the detailed panel

function init() {
    // Create hover tooltip for country names
    const hoverTooltip = d3.select("body").append("div")
        .attr("class", "hover-tooltip")
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("background-color", "#333")
        .style("color", "#fff")
        .style("padding", "5px 10px")
        .style("border-radius", "5px")
        .style("font-family", "Arial, sans-serif")
        .style("font-size", "12px");

    // Create a toolbar at the top of the screen
    const toolbar = d3.select("body").append("div")
        .attr("class", "toolbar")
        .style("position", "fixed")
        .style("top", 0)
        .style("left", 0)
        .style("width", "100%")
        .style("height", "50px")
        .style("background-color", "#333")
        .style("display", "flex")
        .style("align-items", "center")
        .style("justify-content", "flex-end")
        .style("padding", "0 20px")
        .style("box-shadow", "0 2px 4px rgba(0, 0, 0, 0.1)");

    // Add the 2D/3D toggle button to the toolbar
    toolbar.append("button")
        .attr("class", "toggle-btn")
        .text("Toggle 2D/3D")
        .style("background-color", "#fff")
        .style("border", "none")
        .style("padding", "10px 20px")
        .style("border-radius", "5px")
        .style("cursor", "pointer")
        .style("margin-right", "50px") // Adjust this value to move the button further left
        .on("click", toggleView);

    // Adjust map projection settings to accommodate toolbar
    const toolbarHeight = 50; // Height of the toolbar
    const mapRightOffset = width - panelWidth - mapRightBuffer;

    // 2D projection with buffer adjustments
    projection = d3.geoMercator()
        .scale(120)
        .translate([(mapRightOffset - panelWidth) / 2, (height - toolbarHeight) / 1.5 + mapTopBuffer]); // Adjust for toolbar height
    path = d3.geoPath().projection(projection);

    const svg = d3.select("#map-container")
        .append("svg")
        .attr("width", width)
        .attr("height", height - toolbarHeight); // Adjust SVG height to account for the toolbar

    // 2D Map Group with buffer adjustments
    map2D = svg.append("g")
        .attr("transform", `translate(${panelWidth + panelBuffer}, ${mapTopBuffer + toolbarHeight})`); // Shift 2D map down and right

    // 3D Map Group
    map3D = svg.append("g")
        .attr("transform", `translate(${panelWidth + panelBuffer}, ${toolbarHeight})`) // Shift 3D globe right
        .style("display", "none");

    d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
        .then(data => {
            const countries = topojson.feature(data, data.objects.countries);

            // 2D Map Rendering
            map2D.selectAll("path")
                .data(countries.features)
                .enter()
                .append("path")
                .attr("d", path)
                .attr("fill", "#ccc")
                .attr("stroke", "#fff")
                .on("mouseover", function(event, d) {
                    highlightCountry(event, d);
                    hoverTooltip.style("visibility", "visible").text(d.properties.name);
                })
                .on("mousemove", function(event) {
                    hoverTooltip
                        .style("top", (event.pageY - 10) + "px")
                        .style("left", (event.pageX + 10) + "px");
                })
                .on("mouseout", function(event, d) {
                    resetHighlight(event, d);
                    hoverTooltip.style("visibility", "hidden");
                })
                .on("click", showTooltip)
                .on("dblclick", showDetailedPanel);

            // 3D Globe Rendering
            projection = d3.geoOrthographic()
                .scale(250)
                .translate([mapRightOffset / 2, (height - toolbarHeight) / 2])
                .clipAngle(90);
            path.projection(projection);

            map3D.selectAll("path")
                .data(countries.features)
                .enter()
                .append("path")
                .attr("d", path)
                .attr("fill", "#ccc")
                .attr("stroke", "#fff")
                .on("mouseover", function(event, d) {
                    highlightCountry(event, d);
                    hoverTooltip.style("visibility", "visible").text(d.properties.name);
                })
                .on("mousemove", function(event) {
                    hoverTooltip
                        .style("top", (event.pageY - 10) + "px")
                        .style("left", (event.pageX + 10) + "px");
                })
                .on("mouseout", function(event, d) {
                    resetHighlight(event, d);
                    hoverTooltip.style("visibility", "hidden");
                })
                .on("click", showTooltip)
                .on("dblclick", showDetailedPanel);

            // Enable dragging to rotate the globe
            svg.call(d3.drag()
                .on("start", dragStarted)
                .on("drag", dragged)
                .on("end", dragEnded)
            );
        });
}




function highlightCountry(event, d) {
    if (d3.select(event.target).attr("class") !== "selected") { // Only highlight if not selected
        d3.select(event.target).attr("fill", "#f0f0f0");
    }
}

function resetHighlight(event, d) {
    if (d3.select(event.target).attr("class") !== "selected") { // Only reset if not selected
        d3.select(event.target).attr("fill", "#ccc");
    }
}

function showTooltip(event, d) {
    closeDetailedPanel(); // Close the detailed panel if open

    // Close any existing tooltip
    if (currentTooltip) {
        currentTooltip.remove();
        currentTooltip = null;
    }

    // Deselect previously selected country
    deselectCountry();

    // Highlight the selected country and store its ID
    selectedCountryId = d.id;
    d3.select(event.target)
        .attr("fill", "#f0f0f0")
        .attr("class", "selected"); // Mark as selected

    // Create a new tooltip with the same theme as the hover tooltip
    currentTooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("background-color", "rgba(0, 0, 0, 0.7)")
        .style("color", "#fff")
        .style("padding", "10px")
        .style("border-radius", "5px")
        .style("font-family", "Arial, sans-serif")
        .style("font-size", "14px")
        .style("pointer-events", "auto") // Allow clicking on the tooltip
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 25) + "px");

    // Fetch the data for the country and populate the tooltip
    d3.json(`data/${d.properties.name}.json`)
        .then(countryData => {
            let content = `<span class="close-btn" style="cursor:pointer;">&times;</span>`;
            content += `<h3 style="margin: 0 0 10px;">${countryData.name}</h3>`;
            for (const [key, value] of Object.entries(countryData.info)) {
                content += `<p style="margin: 5px 0;"><strong>${key}:</strong> ${value}</p>`;
            }
            content += `<p style="margin-top: 10px;"><a href="${countryData.source}" target="_blank" style="color: #ccc; text-decoration: underline;">Source</a></p>`;
            currentTooltip.html(content);

            // Add event listener for the close button
            currentTooltip.select(".close-btn").on("click", () => {
                closeTooltip();
            });
        })
        .catch(error => {
            currentTooltip.html(`<span class="close-btn" style="cursor:pointer;">&times;</span><p>Data not available for ${d.properties.name}</p>`);
            currentTooltip.select(".close-btn").on("click", () => {
                closeTooltip();
            });
        });
}

function showDetailedPanel(event, d) {
    // Close any existing tooltip
    if (currentTooltip) {
        currentTooltip.remove();
        currentTooltip = null;
    }

    // Close any existing detailed panel
    d3.select(".detailed-panel").remove();

    // Create the detailed panel
    const panel = d3.select("body").append("div")
        .attr("class", "detailed-panel")
        .style("position", "fixed")
        .style("top", "70px") // Buffer from the bottom of the toolbar
        .style("left", "20px") // Buffer from the left side of the screen
        .style("width", panelWidth + "px") // Width of the panel
        .style("height", (height - 60 - 20) + "px") // Height considering toolbar height and bottom buffer
        .style("background-color", "#333")
        .style("color", "#fff")
        .style("padding", "15px")
        .style("border-radius", "5px")
        .style("overflow-y", "auto")
        .style("box-shadow", "0 2px 5px rgba(0, 0, 0, 0.3)");

    // Add a close button to the panel
    panel.append("span")
        .attr("class", "close-btn")
        .html("&times;")
        .style("position", "absolute")
        .style("top", "10px")
        .style("right", "10px")
        .style("cursor", "pointer")
        .on("click", () => {
            panel.remove();
            currentTooltip = null; // Deselect country when panel is closed
            d3.selectAll("path").filter(c => c.id === selectedCountryId)
                .attr("fill", "#ccc")
                .attr("class", ""); // Reset the style
            selectedCountryId = null; // Reset the selected country ID
        });

    // Fetch the detailed data for the country and populate the panel
    d3.json(`data/${d.properties.name}.json`)
        .then(countryData => {
            let content = `<h2>${countryData.name}</h2>`;
            for (const [key, value] of Object.entries(countryData.detailedInfo)) {
                content += `<p><strong>${key}:</strong> ${value}</p>`;
            }
            content += `<p><a href="${countryData.source}" target="_blank">Source</a></p>`;
            panel.append("div").html(content);
        })
        .catch(error => {
            panel.append("div").html(`<p>Detailed data not available for ${d.properties.name}</p>`);
        });
}


function closeTooltip() {
    if (currentTooltip) {
        currentTooltip.remove();
        currentTooltip = null;
    }
    deselectCountry(); // Deselect the country when the tooltip is closed
}

function closeDetailedPanel() {
    if (detailedPanel) {
        detailedPanel.remove();
        detailedPanel = null;
    }
    deselectCountry(); // Deselect the country when the detailed panel is closed
}

function deselectCountry() {
    if (selectedCountryId) {
        d3.selectAll("path").filter(c => c.id === selectedCountryId)
            .attr("fill", "#ccc")
            .attr("class", ""); // Reset the style and remove the "selected" class
        selectedCountryId = null;
    }
}

function toggleView() {
    if (currentView === '2D') {
        map2D.style("display", "none");
        map3D.style("display", "block");
        currentView = '3D';
    } else {
        map3D.style("display", "none");
        map2D.style("display", "block");
        currentView = '2D';
    }

    // Adjust the positioning of the 3D globe for the new view
    const mapRightOffset = width - panelWidth - mapRightBuffer;
    projection.translate([mapRightOffset / 2, height / 2]);

    // Highlight the selected country in the new view
    if (selectedCountryId) {
        d3.selectAll("path").filter(d => d.id === selectedCountryId)
            .attr("fill", "#f0f0f0")
            .attr("class", "selected"); // Reapply the selected class
    }
}

function dragStarted(event) {
    if (currentView === '3D') {
        rotation = projection.rotate();
    }
}

function dragged(event) {
    if (currentView === '3D') {
        const delta = [event.dx, event.dy];
        rotation[0] += delta[0] / 2; // Adjust these values to control sensitivity
        rotation[1] -= delta[1] / 2;
        projection.rotate(rotation);
        map3D.selectAll("path").attr("d", path);
    }
}

function dragEnded(event) {
    // No specific action needed at the end of the drag
}

init();
