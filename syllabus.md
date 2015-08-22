---
title:      Syllabus
layout:     main
---

### Lecture and section information

CS 5220, Fall 2015  
Lecture time: TR 8:40-9:55  
Lecture location: Phillips 101

### Staff and office hours

Prof: [David Bindel](http://www.cs.cornell.edu/~bindel)  
425 Gates Hall  
Phone: 607-255-5395  
E-mail: <script type="text/javascript" language="javascript">
 function strrev(str) { return str.split("").reverse().join(""); }
 var name = 'lednib';
 var domain = 'cs.cornell.edu';
 document.write(strrev(name) + '@' + domain + "<br/>OH: T 10-11, W 1:30-2:30, or by appointment.");
</script>
<noscript>lastname at cs.cornell.edu<br/>OH: W 1:30-2:30, Th 10-11, or by appointment.</noscript>

### Catalog description

4 credits.  Models for parallel programming and survey of parallel
machines. Existing parallel programming languages, vectorizing
compilers, and parallel libraries and toolboxes.

### Prerequisites

This class is intended for a broad array of students working with high
performance computation, including students who might not have had a
CS undergraduate degree.  If you are concerned about whether you have
the right background, please talk to the instructors.  Generally,
the prerequisites are:

- You will need programming skills in a C family language (C, C#, C++,
  Java).  Code for the class will be written mostly in C (or C++).
- Prior exposure to a Unix environment is helpful but not critical.
- Prior exposure to numerical methods is helpful but not critical.

### Texts

None required, but relevant texts include:

- [Introduction to High Performance Computing for Scientists and Engineers (Hager and Wellein)][hager-book]
- [Structured Parallel Programming (McCool, Reinders, Robison)][mccool-book]
- [Programming Massively Parallel Processors (Kirk and Hwu)][kirk-book]
- [Performance Optimization of Numerically Intensive Codes (Goedecker)][goedecker-book]
- [Principles of Parallel Programming (Lin and Snyder)][lin-book]
- [Introduction to Parallel Programming (Pacheco)][pacheco-book]
- [Parallel Programming (Wilkinson and Allen)][wilkinson-book]

[hager-book]: http://www.amazon.com/Introduction-Performance-Computing-Scientists-Computational/dp/143981192X
[mccool-book]: http://www.amazon.com/Structured-Parallel-Programming-Efficient-Computation/dp/0124159931
[kirk-book]: http://www.amazon.com/Programming-Massively-Parallel-Processors-Second/dp/0124159923/
[goedecker-book]: http://epubs.siam.org/doi/book/10.1137/1.9780898718218
[lin-book]: http://www.amazon.com/Principles-Parallel-Programming-Calvin-Lin/dp/0321487907
[pacheco-book]: http://www.amazon.com/Introduction-Parallel-Programming-Peter-Pacheco/dp/0123742609
[wilkinson-book]: http://www.amazon.com/Parallel-Programming-Techniques-Applications-Workstations/dp/0131405632

### Course technologies

- We will be collaborating on code and modeling exercises in class,
  and you are *encouraged* to bring a laptop to fully participate.
- You will need a free [GitHub account](https://github.com/).
  The [Student Developer Pack](https://education.github.com/pack)
  option comes with various perks (including a micro account with three
  free repositories).

### Computing platform

The primary computing platform will be an instructional cluster with
fifteen Xeon Phi 5110P boards hosted in eight 12-core nodes consisting
of Intel Xeon E5-2620 v3.  Unless otherwise stated, homework and
projects should be tested and timed on these machines.

Intel generously donated the Xeon Phi boards and funded the purchase
of the host machines, which were provided with deep matching discounts
by Dell.

### Class material

Class material will be posted on GitHub, and any merged pull requests
(corrections or additions to course notes, better solutions than ours,
tests that uncover interesting problems, suggested exercises, etc)
will be given extra credit.

Student work will also be posted on GitHub in public repositories,
with homework and projects submitted via pull requests (don't worry,
we will discuss how these work in class).

## Course work

### In-class work

CS 5220 will be run as a flipped classroom.  You are responsible for
reviewing assigned materials outside class; class time will be devoted
to discussion of papers, pair programming, performance modeling
exercises, and other active learning work.  While it is okay to miss
class sometimes, you are expected to participate regularly as part
of your grade.

### Reading

Readings will be assigned before class, and may include papers, notes,
slide decks.  There may also be occassional videos or interactive
tutorials (even though these technically may involve little reading).
We will assign a variety of pre-class responses to readings; these
should be submitted prior to class, but may (and should) be updated
after class in response to what was learned.

### Homework and Projects

There will be a few small individual programming and performance
modeling exercises to be done out of class (often with an in-class
performance).  There will be three (probably) standardized projects on
performance analysis and tuning of example numerical codes, including
both coding work and a written report.  Project groups will be
assigned, and students will be responsible for assessing the
contributions made by each team member.  The final projects are also
in small groups, and may either involve a research project (default)
or an instructional module (experimental):

 - Research projects should examine performance analysis in some form,
   but are otherwise flexible.  Examples might include exploring
   novel programming languages or models, enhancing or tuning a
   high-performance numerical code, or modeling performance tradeoffs
   in some existing code base.  The deliverables for research
   projects will be a paper and a short presentation.
 - Instructional modules should teach some aspect of high performance
   computing or related technologies, targeted at K-12,
   undergraduate, or graduate students.  Examples might include a
   short course, a workshop, or a project for a course like CS 5220.
   We particularly encourage modules that use the Xeon Phi in
   some interesting way.  The deliverables for instructional projects
   include not only the materials used (lesson plans, slide decks,
   sample codes) but also a set of learning objectives, an assessment
   plan, and a concrete plan for how the module might be deployed
   (though actual deployment is not required).

### Peer review

Class projects will be developed in public repositories on GitHub.
Students are encouraged to study code written by other groups for
inspiration (with citation), and to help provide other groups with
constructive feedback.  Project groups will also be responsible for
reviewing the code and write-up of other groups under a rubric that
will be provided.

### Reproducibility

Computations and performance experiments that appear in homeworks and
project reports should be *automatically reproducible* on the class
cluster, either by the instructors or by peers.  We will penalize
experimental results that do not come with an associated script that
can reproduce them, even if they appear to be otherwise correct.

### Grading

- Class participation and individual homework (20%)
- Standard group projects and peer review (50%)
- Final project (30%)

## Course policies

### Late work policy

Pre-class homework is due at the start of class in order to ensure
high-quality in-class exercises.  Homework may be revised during or
after class based on what is learned during the class.  Grades for
homework exercises will be based on a check/no check assessment of the
initial submission and (potentially) a more thorough evaluation of a
revised submission, which will typically be due before the next class.

Group projects are due by 11:59 on the due date in order to allow a
proper opportunity for peer review.  As with homework, group projects
will be evaluated both before and after peer review, with a more
thorough assessment after the review.  Group projects that are
submitted late will forfeit both the part of the grade associated with
the initial submission and will not receive the benefit of peer
review.

### Collaboration

An assignment is an academic document, like a journal article.
When you turn it in, you are claiming everything in it is your
original work, *unless you cite a source for it*.

As part of the process of learning development skills, you should
attempt to develop and debug code for yourself.  Unlike most CS
courses, we will by default keep all code in public repositories, and you are
*encouraged* to look at code and writeups from other students for
inspiration, as well as any resources you find on the web, provided
you cite the work that inspired you.  However, we *do not encourage*
blatant bulk copying, even with citation.  Such behavior will be
visible not only to instructors but also to peers, and peer evaluators
will be asked to identify such behavior.

### Academic integrity

We expect academic integrity from everyone.  School is stressful, and
you may feel pressure from your coursework or other factors, but that
is no reason for dishonesty!  By default, all work will be public on
GitHub, and we encourage you to be inspired by work of others.  But
cite, and be aware of your own learning experience!  If you feel you
can't complete the work on the own, come talk to the professor, the
TA, or your advisor, and we can help you figure out what to do.

For more information, see Cornell's 
[Code of Academic Integrity](http://cuinfo.cornell.edu/Academic/AIC.html).

### Code of conduct

We have a [code of conduct](conduct.html) for contributing to the
class (adapted from
[the Contributor Covenant 1.2.0](http://contributor-covenant.org/)).
In addition to not harrassing each other, note that you *must not
publish private information without permission*.  Particularly when
working on public collaborations such as group projects and peer
review, please know and respect the privacy concerns of your peers.
In public forums such as GitHub pull discussions, it is probably best
to refer to each other only by GitHub identifiers.

### GitHub and copyright

Students retain copyright for their academic work.  While you will be
asked to post code on GitHub, you are *not required* to post work
under an open source license.

Any code or documentation you post for inclusion in the main class
repository should be released under an appropriate open license; see
the
[contributing guidelines](https://github.com/cornell-cs5220-f15/cornell-cs5220-f15.github.io/blob/master/CONTRIBUTING.md).

### GitHub and privacy

You will be asked to post your code on GitHub in a public repository,
but this is *not required*.  If you do choose to post code on GitHub,
you are free to use a pseudonymous account.  We will use the CS
department Course Management System (CMS) to inform you of grades and
evaluation of your work; this information will never be posted in
public.

If you prefer not to use GitHub, this will not affect your grade in
any way.  You will still use git to submit your code, but with
submissions created via `git format-patch` and uploaded to CMS.
Your submissions will still be subject to peer review.  If you want
to take this option, let us know promptly.

### Emergency procedures

In the event of a major campus emergency, course requirements, deadlines, and
grading percentages are subject to changes that may be necessitated by a
revised semester calendar or other circumstances.  Any such announcements will
be posted to [the course home page](index.html).

