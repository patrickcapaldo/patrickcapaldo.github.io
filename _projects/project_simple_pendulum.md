---
layout: page
title: simple pendulum simulation
description: a visualisation of the simple pendulum tutorial
img: assets/img/simple_pendulum/simple_pendulum_cover.png
importance: 1
category: fun
---

## Animation

The animation shown in Figure 1 was created using the Pygame library for Python. The GitHub code for this can be found at <a href="https://github.com/patrickcap/dynamics-fun/blob/main/oscillatingPendulum.py">this</a> repository.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="assets/video/simple-pendulum-animation-large-grav.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Figure 1: Harmonic motion of a simple pendulum and the energy exchange between GPE and KE.
</div>

## Python Code

Below displays the Python code I wrote to create the animation.

{% raw %}
```python
import pygame, sys, pymunk, math

pygame.init()  # initiating game
screen = pygame.display.set_mode((1000, 600))  # display surface
clock = pygame.time.Clock()  # game clock

space = pymunk.Space()  # physical space
space.gravity = (0, 500)  # horizontal and vertical gravity

# pin coordinates
pin_x = 700
pin_y = 300

# PARAMETERS
L = 200                                   # string length [m]
theta_start = 120*(math.pi/180)                # angle from vertical down [rad]
gravity = 9.81                          # gravity [m/s^2]
nat_freq = math.sqrt(gravity/L)               # natural frequency [rad/s]
pin_bob_x2 = L * math.sin(theta_start)                  # distance from pin x
pin_bob_y2 = L * math.cos(theta_start)                  # distance from pin y
# account for position of pin
bob_x2 = pin_x + pin_bob_x2
bob_y2 = pin_y + pin_bob_y2
# starting y coord
start_y = bob_y2
# static equilibrium y coord
stat_eq_y = pin_y + L

# Time
t = 0
dt = 0.05

# Fonts
font = pygame.font.Font('freesansbold.ttf', 32)
font2 = pygame.font.Font('freesansbold.ttf', 26)

# Text GPE
text_GPE = font.render('GPE', True, (0,0,0), (255,255,255))
textRect_GPE = text_GPE.get_rect()
textRect_GPE.center = (123, 575)
# Text KE
text_KE = font.render('KE', True, (0,0,0), (255,255,255))
textRect_KE = text_KE.get_rect()
textRect_KE.center = (225, 575)

# game loop
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    # DYNAMICS
    t += dt
    theta = theta_start * math.cos(nat_freq * t)  # angle from vertical down [rad.]
    bob_x2 = pin_x + (L * math.sin(theta))
    bob_y2 = pin_y + (L * math.cos(theta))

    # white screen
    screen.fill((255, 255, 255))

    # GPE and KE Text
    screen.blit(text_GPE, textRect_GPE)
    screen.blit(text_KE, textRect_KE)

    # GPE and KE Borders: # (display, colour, [left, top, width, height], filled)
    pygame.draw.rect(screen, (0, 0, 0), (95, 445, 60, 110))                 # GPE black border
    pygame.draw.rect(screen, (255, 255, 255), (100, 450, 50, 100))                 # GPE white inside
    pygame.draw.rect(screen, (0, 0, 0), (195, 445, 60, 110))                # KE black border
    pygame.draw.rect(screen, (255, 255, 255), (200, 450, 50, 100))                # KE white inside

    # -------------- Parameters to change GPE rect
    # GPE max when theta = theta_start, GPE zero when theta = 0
    # height as percentage of the range of y values (from starting y value to the pin location + length)
    range_y = (pin_y+L) - start_y
    height_GPE = int(((range_y-(bob_y2-start_y))/range_y) * 100)                 # %
    start_top_GPE = 450 + 100 - height_GPE
    pygame.draw.rect(screen, (255, 180, 0), (100, start_top_GPE, 50, height_GPE))

    # GPE % text
    text_GPE_cent = font2.render(str(height_GPE), True, (0, 0, 0), (255, 255, 255))
    textRect_GPE_cent = text_GPE_cent.get_rect()
    textRect_GPE_cent.center = (125, 425)
    screen.blit(text_GPE_cent, textRect_GPE_cent)

    # KE - complement of GPE
    height_KE = 100 - height_GPE                     # %
    start_top_KE = 450 + 100 - height_KE
    pygame.draw.rect(screen, (0, 180, 50), (200, start_top_KE, 50, height_KE))

    # KE % text
    text_KE_cent = font2.render(str(height_KE), True, (0, 0, 0), (255, 255, 255))
    textRect_KE_cent = text_KE_cent.get_rect()
    textRect_KE_cent.center = (225, 425)
    screen.blit(text_KE_cent, textRect_KE_cent)

    # line
    pygame.draw.line(screen,(0,0,255), (pin_x,pin_y), (bob_x2,bob_y2), 3)
    # bob
    pygame.draw.circle(screen, (0,0,255), (bob_x2, bob_y2), 10)
    space.step(1/50)
    pygame.display.update()
    clock.tick(120)
```
{% endraw %}

