---
layout: page
title: Delta Day
description: Following the development of my incremental development tool, Delta Day.
img: assets/img/projects/delta_day/delta_day_window_example.png
importance: 1
category: fun
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/delta_day/delta_day_window_example.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Screenshot of Delta Day's main window.
</div>

# Motivation

Delta Day encourages personal improvement by making small incremental progress towards things you are interested in, each and every day. Having a focus on small incremements reduces the chances of wasting time thinking too far into the future about large, grand plans, and instead shifts your focus into just starting and doing something. Whilst this can lead to occasionally finding dead-ends, it generally results in greater personal improvement in the long-run compared to doing nothing and trying to plan too far into the future.

Delta Day also focuses on rewarding small efforts, frequently, as opposed to rewarding large efforts, rarely. The application also revokes any shortcuts to share your efforts to social media, this is a journey with respect to you and only you - there is no need for comparison with others.

# GitHub

Click <a href='https://github.com/patrickcap/delta-day'>here</a> to find the source code on GitHub.

# Journal

## Wednesday, 20 March 2024

* Features:
    * Category counting table now displaying data correctly.
* Development:
    * Previous implementation was attempting to parse the entry text to extract the category and count from there. Instead, simply store the categories in a table when they are entered and keep a global variable counter. Then access that global variable whenever the table should be updated. Also, rows were being set to zero and never updated, now they are set to the length of the category dictionary (i.e., number of categories known).

## Tuesday, 19 March 2024

* Ideation: Wanting a tool to fight analysis paralysis and reward just starting/doing things.
    * Focus on small, frequent increments towards things you are interested in.
    * Only compare you to you.
    * Gamify and visualise how much you are learning in these areas.
* Features:
    * Submit text entries to categories of goals you are working towards.
    * Gain one 'point' for each entry for each topic, every day.
    * See 'tallies' of each category grow over time.
* Development:
    * Created a repository named 'Delta Day' - referring to 'delta' being a small increment and 'day' for doing so each day.
    * Created a GUI in Python using PyQt where the user can submit text entries to a database.
    * Entry history is recorded with a date and time display.
    * Categories can be entered/selected and associated with each entry.
    * Category and count table implemented but not displaying correctly.
    * Delta Day icon implemented in application header bar.