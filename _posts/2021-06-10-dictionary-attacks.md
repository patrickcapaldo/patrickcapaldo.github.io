---
layout: distill
title: Dictionary Attacks
description: Defeating ciphers by finding the key.
tags: cybersecurity
categories: tutorials
date: 2021-06-10
featured: true

authors:
  - name: Patrick Capaldo
    url: "https://patrickcap.github.io/"
    affiliations:
      name: None

bibliography: 2021-06-10-dictionary-attacks.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: How do Passwords Work?
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Brute Force Attacks
  - name: Dictionary Attacks

# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
_styles: >
  .fake-img {
    background: #bbb;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
  }
  .fake-img p {
    font-family: monospace;
    color: white;
    text-align: left;
    margin: 12px 0;
    text-align: center;
    font-size: 16px;
  }

---

## How Do Passwords Work?

A user's identity can be confirmed by checking if they know secret information that they registered in the past. This secret information (password) is stored in a database external to the userand is usually represented by a string of characters. Modern login systems never store passwords in plaintext, but rather encrypt the passwords (jumble them up irreversibly) and store that encryption. With this paradigm, even if an attacker gains access to the database, they cannot discover the plaintext password since the encryption is effectively irreversible unless they know the key that the database uses to encrypt the passwords. As long as this key is kept a secret, the passwords are safe... right?

## Brute Force Attacks

The brute force attack is the most elementary form of cyberattack. The attacker simply tries every possible combination of characters that can form a password - eventually, they are destined to find the correct combination that forms the desired password. The major downfall of this method is that the time required to find this password increases exponentially with each extra character that the password can possibly hold. Modern passwords are at least 12 characters long, and with modern technology, this would take an attacker about 200 years to discover via brute force methods<d-footnote>Better Buys. 2020. Estimating Password Cracking Times. [online] Available at: <\https://www.betterbuys.com/estimating-password-cracking-times/#:~:text=Nine%2Dcharacter%20passwords%20take%20five,bad%20for%20one%20little%20letter.\> [Accessed 20 November 2020].</d-footnote>. This is an encouraging thought for us password-holders, except for one critical factor - we are not good at making strong passwords, nor remembering them. A good password will use all possible characters (numbers, cases, special characters) in a random order. However, most people use passwords that are easy to remember, increasing their predictability and hence allowing attackers to improve their chances of cracking our passwords with smart guessing.

## Dictionary Attacks

The dictionary attack builds upon the smart guessing method of brute force attacks by creating a list of likely user plaintext passwords and their ciphertext counterparts (after encryption). This list is called a dictionary. Therefore, if the attacker gains access to the database, they can match the encrypted ciphertexts that they find with the ciphertexts in their dictionary. If a ciphertext match is found, the dictionary will tell them what the plaintext version of that password is. Furthermore, attackers can create 'smart dictionaries' which will test for predictable human password patterns - for example, swapping the letter 'a' for '@', or 's' for '5', or 'o' for '0', and so on. This smart process exploits the downfall of human nature and how we think we are making our passwords more secure, when the attackers are already one step ahead.
