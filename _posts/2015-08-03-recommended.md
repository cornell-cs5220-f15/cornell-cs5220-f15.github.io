---
layout: post
title:  Recommended software for CS 5220
author: David Bindel
date:   2015-08-03 14:25:48 -0400
tags: software
---

Most of the class work will be done on the Xeon Phi cluster, but it is
likely that you will also want to do some development work on your own
machine.  You will at the minimum need

- A good text editor (or GUI if you prefer)
- An ssh client

You may also want a C/C++ development environment.  For this reason, I
*strongly recommend* that you install the following software on your
machine (depending on OS).

## Shell and git setup

Over the course of the class, you will be doing a variety of tasks
at a Unix shell.  This is the way you do anything at all on the class
cluster, but in order to get the most leverage from learning these
tools, I recommend making sure you know how to access a similar shell
on your own machine.  How to get such a shell depends on your OS.

### Windows

- If you are running under Windows, I recommend installing
  [Cygwin](https://www.cygwin.com/).  Make sure you install the Git
  packages from the "Devel" category.
- If you want to do any local development, I recommend also installing
  GCC (from under the "Devel" category).
- You may also want to download a Git GUI such as
  [GitHub for Windows](https://windows.github.com/).  Even if you do,
  I still recommend installing Cygwin for the Unix-style shell.

### OS X

- OS X is Unix under the hood (a BSD variant).  If you don't usually
  use the Terminal program, you'll likely want to fish it out now.
  The default terminal is pretty good, but
  [iTerm2](https://www.iterm2.com/)
  is a popular alternative if you want something fancier.
- If you'll develop locally, you probably want XCode (from the App
  Store) and the command line tools.  To install the command line
  tools, open a terminal and type
  
      xcode-select --install
  
  Then select the command line tools.
- You will likely want some additional utilities; I recommend installing
  [HomeBrew](http://brew.sh/) to make these easy to get, but
  [MacPorts](https://www.macports.org/) is a good alternative.
- You may want a Git GUI such as [GitHub for Mac](https://mac.github.com/).
  Or you may be happy with the default command line git.

### Linux

- If you're already running Linux, there's not so much to do.
  Just make sure you have `git` installed (and ideally a compiler).

## Setting up git

For the rest of this document, I will assume that you are at a
Unix-style shell (a Cygwin shell, OS X Terminal, or ordinary terminal
under Linux).  You will probably want to start by setting up your Git
configuration to match your GitHub account.  For example, I would write

    git config --global user.name "dbindel"
    git config --global user.email "bindel@cs.cornell.edu"

Note that there's no requirement that you set up GitHub to use your
real name and email (nor indeed is there any strict requirement that
you set these configuration options at all!).

## Setting up Python

If you already have Python set up and are happy with it, great!  If
you don't have a preferred Python environment already, I recommend
[Anaconda](https://store.continuum.io/cshop/anaconda/).  Note that
this will probably be *convenient* later in the class, but is again
not *required*.
