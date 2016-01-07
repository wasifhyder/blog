---
layout: post
title:  "Day 1: Initial Blog Setup!"
date:   2016-01-07 20:11:09 +0800
categories: jekyll update
---
I finally managed to get the website up and running through jekyll. The following few days will be part of an iterative process to develop this website and document my learnings in code.

One great thing about using jekyll is the amount of features I get along with it. It also plays well with github pages, which means free hosting. How awesome is that?

Also, I can higlight code nicely. Here is a factorial code snippet:

{% highlight python %}
def factorial(n):
    if n < 1: return 1
    return n * factorial(n-1)
# prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

