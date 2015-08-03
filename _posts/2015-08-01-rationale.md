---
layout: post
title:  Rationale for class Git workflows
author: David Bindel
date:   2015-08-01 23:46:36 -0400
tags:   git
---

We will use Git and GitHub extensively in CS 5220: for version control
(of course) across multiple machines, for collaborative work, for peer
review, and for submitting homework and projects.  This post serves
mostly to document the rationale behind the Git workflow we'll use in
class.  Some parts of this process match my standard workflow; see,
for example, my [repository for CS 4220 in Spring 2015][cs4220].
Other parts of the process -- specifically, using pull requests to
manage homework -- are new to me.  I will document my thoughts on what
worked well and what didn't at the end of the semester, but for now
let's start with the plan.

[cs4220]: https://github.com/dbindel/cs4220-s15/

### Rationale for Git

I've strongly encouraged students in past classes to use Git (or some
other version control system), but I have never enforced it.  But
there are at least three broad reasons why it makes sense to enforce
the use of Git in a class like CS 5220:

1.  Most work in the class is done in teams.  I know better than to
    use the anarchy method of software team coordination, but for a
    student who has never used version control, that has to be a
    tempting thought.  Better to enforce some basic good practices up
    front.
2.  Work will inevitably involve multiple machines and accounts: at
    least the accounts of collaborating students on the class cluster,
    and probably also the laptops or desktop machines of anyone in a
    project group.  Things are additionally complicated by the fact
    that students might reasonably want to work on code when
    disconnected from the campus network (though [the campus VPN][vpn]
    is always an option).  Again, it makes a lot more sense to handle
    these copies systematically (via Git) than to use the copy/FTP
    method.
3.  Distributed version control systems (DVCS) are industry standard
    tools at this point.  There are DVCS systems other than Git, and
    in the absence of other context it might make sense to use a
    system like Mercurial instead.  But given the popularity of GitHub
    as a hosting solution, skills in Git are probably more relevant
    for most open source projects.

Also, partly because if has become so popular, some of the more
annoying issues with Git (e.g. poor Windows support) have largely been
addressed by third-party tools.

[vpn]: http://www.it.cornell.edu/services/vpn/

### Rationale for GitHub

There are two popular options for hosting Git repositories:

- [GitHub][github] is the most popular Git hosting service.  Creating
  public repositories is free, and there are also student accounts
  with five free private repositories.  In addition, it is possible to
  apply for private repositories for a class, which is an option I
  considered.
- [BitBucket][bitbucket] is a direct competitor with GitHub.  Like
  GitHub, BitBucket comes with an impressive array of web-based tools
  for tracking issues, building wikis, etc.  An attractive feature of
  BitBucket is that it offers unlimited private repositories for
  academic users; this is one of the selling points for me in my own
  work!

In addition to BitBucket and GitHub, there are also good options that
would not involve cloud hosting.  Cornell has an institutional
subscription to TeamForge, which now supports Git repositories; and
there are also several groups around campus using private
[GitLab][gitlab] servers.  I have accounts on GitHub and BitBucket
(actively used), and GitLab.com (mostly dormant).

Using an externally hosted service like GitHub is attractive for
reliability reasons (enough people depend on GitHub that issues and
service interruptions tend to be addressed promptly).  More to the
point, though, GitHub is *really* popular.  That means learning to use
GitHub will probably be valuable for students in the class, both as a
skill in itself and (particularly for the CS undergrad and MEng
population) as a way of building a portfolio for prospective
employers.  The popularity of GitHub also means there are a lot of
resources online in case students get turned about.  In addition,
GitHub has begun to make active efforts to
[support educational use][gh-education] as well as supporting
[citable scientific code bases][gh-science].

[github]: http://www.github.com/
[bitbucket]: http://www.bitbucket.org/
[gitlab]: http://about.gitlab.com/
[gh-education]: https://education.github.com/
[gh-science]: https://github.com/blog/1840-improving-github-for-science

### Rationale for public repositories

By default, student work for the class will go into public
repositories.  The advantage of this arrangement is that students have
more opportunity to provide each other with inspiration and feedback.
The chief pedagogical disadvantage (as much perceived as real, I
think) is that a student who sees someone else's solutions before
solving a problem on their own might not learn as much.  The chief
logistical disadvantage comes down to grading: grades based on
solutions to a standardized assignment, particularly when the
solutions are graded in a semi-automated fashion, clearly won't work
well if the entire class can collaborate on the solution.

While I will use public repositories by default for this class,
I will allow alternatives.  This is based on my understanding
of two competing concerns: the utility of public feedback,
and the privacy concerns that students may have.

#### Public repositories and feedback

It's likely that I will continue to use private repositories in other
classes in the future, but CS 5220 seems like an ideal class with
which to try making all repositories public.  From past experience,
the students in this class tend to be very motivated and to come from
highly diverse backgrounds.  They have a lot that they can teach each
other, and I expect that providing incentives for public discussion of
class work can only help things.  Private classwork, while
logistically convenient, blocks students from many of the ways in
which they might otherwise teach each other.  Not only that, but
course policies that forbid collaboration do not teach the real skills
needed for *appropriate* re-use of code and ideas.  Making all
repositories public provides everyone with practice in this skill.  It
also means that any poor behavior (e.g. bulk copying of someone else's
code base) will be public, which addresses what I think is one of the
primary motivations for cheating in CS courses: not only is it easy,
but students have the impression that nobody will ever find out.

Just because it is *possible* for students to view work that others
are doing does not mean that everyone will take advantage of the
opportunity, even when it is appropriate and encouraged.  So I plan
to use two mechanisms to encourage this:

1.  All projects will be peer reviewed (with the option for students
    to address reviewer concerns) prior to final submission.
2.  Students who productively contribute outside their group (e.g.
    by suggesting a bug fix to another group) should get credit.
    This policy gets explicit mention on the syllabus when it comes
    to the main course repository (if I accept a pull request, I'll
    give some measure of extra credit), but I will also find ways
    to make it count when students help each other.

The goal of using public repositories is to provide more rapid
feedback (from teaching staff and peers) and to improve student
learning.  But it's true that this doesn't make evaluation any
simpler.  On the other hand, groups this time will be assigned,
with peer evaluation within each group of the contributions made
by each of the group members (assigning the group isn't meant to
defend against gaming this evaluation, but it may be a nice side
effect).

#### Privacy considerations

[FERPA][ferpa] gives students certain rights involving access to their
educational records and restricts schools from releasing personally
identifying information about students except under specific
circumstances.  While the guidelines on some things are clear --
it's not okay to publish grades, for example -- the guidelines
regarding a social coding environment like GitHub are less clear.
Universities take this stuff seriously, and sometimes perhaps
overreact -- as, for example, in 2011 when
[Georgia Tech killed their wiki system][gatech-ferpa] under the
interpretation that it leaked information about which classes
students took.

There are many examples online of class policies that explicitly
address FERPA in the context of social media: the pages at
[U Central Florida][ucf-ferpa] and [Indiana University][iu-ferpa]
are particularly useful, and I've found other examples of forms
regarding FERPA from faculty at [Notre Dame][nd-ferpa] and
[Vanderbilt][anderson-ferpa].  GitHub repositories, like
public blogs, are never ["in our keeping" and so do not become
educational records][hastac-ferpa]; see also [here][educause-ferpa]
and [here][peer-rev-ferpa].  Consensus seems to be that
public assignments are fine under FERPA; and I like the comment
that "[FERPA is not an excuse for bad pedagogy][hybrid-manifesto]."
At the same time, it is important to take care with student privacy --
both because of FERPA and because it's just the right thing to do.
Mostly, I think that means taking steps to ensure that neither the
instructional staff nor the students divulge personally identifying
information about other students (what a student chooses to publish
about herself is her own business).  But a student still might have
legitimate privacy concerns.

Given this context, using GitHub for class is *encouraged*, but not
*required* (and there is no grade penalty for opting out).  It's
possible to make a pseudonymous account on GitHub, and this is one
option.  But nothing about the general abstraction of Git pull
requests and patches is specific to GitHub.  Indeed, the Linux kernel
project [famously does not use][linux-github] the GitHub pull request
mechanism.  Students who prefer not to use GitHub can still use Git,
and may submit their assignments through CMS in the form of ordinary
Git (vs GitHub) request pulls (either against a repository to which
the instructors have read permission or using the `-p` option).
It remains to be seen whether any students actually choose
this option, but the mechanism is at least straightforward (and
shouldn't make the grading workflow overly complicated).

[ferpa]: http://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html
[gatech-ferpa]: https://computinged.wordpress.com/2011/11/15/no-more-swikis-end-of-the-constructionist-web-at-georgia-tech/
[educause-ferpa]: http://www.educause.edu/ero/article/your-use-social-media-ferpa-compliant
[hastac-ferpa]: https://www.hastac.org/blogs/superadmin/2012/11/30/guidelines-public-student-class-blogs-ethics-legalities-ferpa-and-more
[iu-ferpa]: http://www.teaching.iub.edu/finder/wrapper.php?inc_id=s2_6_tech_04_cloud.shtml
[ucf-ferpa]: https://topr.online.ucf.edu/index.php/FERPA_Statements
[nd-ferpa]: https://ltlatnd.wordpress.com/2011/12/19/taking-steps-to-respect-student-privacy-in-public-work/
[anderson-ferpa]: https://gist.github.com/CliffordAnderson/8393947
[peer-rev-ferpa]: http://lj.libraryjournal.com/2013/12/opinion/peer-to-peer-review/making-ferpa-fit-when-we-flip-peer-to-peer-review/#_
[linux-github]: https://github.com/torvalds/linux/pull/17#issuecomment-5654674
[hybrid-manifesto]: http://www.hybridpedagogy.com/journal/online-learning-a-manifesto/

### Rationale for pull request submission

There are [two standard models][pull-v-fork]; the
[GitHub education guide][gh-education] refers to these respectively as
the "fork" and "sandbox" strategies.  In the
[fork strategy][fork-submit], students fork an instructor-created
repository containing the basic assignment skeleton, and submit
solutions via [GitHub pull requests][gh-pull].  In the
[sandbox strategy][sandbox-submit], the instructor drives the creation
and population of student repositories.

As usual, one of the major advantages of using the pull request (PR)
model is that it trains students to use pull requests -- a valuable
skill in many modern development environments.  It is also true that
GitHub provides excellent online tools for reviewing pull requests
(and tools like [hub][hub] can serve to automate processes where the
online tools would get clunky for large numbers of students).  A
second, independent reason to use pull requests is that CS 5220 often
attracts highly engaged auditors.  The fork/PR model makes the
students (fully enrolled or auditing) responsible for deciding whether
they want to submit.

A potential disadvantage to using pull requests for homework
submission is that there is no intrinsic way to distinguish genuine
pull requests (e.g. to address a bug in project skeleton code) from
submission pull requests.  For this reason, we recommend pull requests
with "HW" at the start of the title as a disambiguation convention.
This is much like the "WIP" tag often used for work-in-progress pull
requests.

[pull-v-fork]: https://education.github.com/guide/assignments
[fork-submit]: https://education.github.com/guide/forks
[sandbox-submit]: https://education.github.com/guide/sandboxing
[gh-pull]: https://help.github.com/articles/using-pull-requests/
[hub]: https://hub.github.com/
