---
layout: page
title: Verifying Safe Memory Reclamation in Concurrent Programs
description: 
#  
img: 
importance: 2
category: mixed
related_publications: true
---

Verification of concurrent programs is very tough because the proof needs to account for a huge number of interleavings of execution steps of all threads. 
The majority of concurrent programs and concurrent data structures are implemented in unsupported garbage collection languages, like C and C++. That means programmers are responsible for deallocating unused memory. However, unlike sequential programs, it is not simple to deallocate a memory block that is no longer in use by a thread in concurrent programs since that block of memory may still be accessed by other threads. This raises one more challenge in reasoning about concurrent programs: **safety of memory reclamation**, that is, a no-longer-used memory block by a thread should be safely deallocated with a guarantee that no other thread accesses such a freed memory block after that.

In this project {% cite DBLP:conf/wrla/TranO24 %}, we formally verify the safe memory reclamation of two concurrent programs, the Shared counter and Treiber's stack, integrated with **hazard pointers**, a mechanism for safe memory reclamation. The two programs are formally specified in CafeOBJ, an algebraic specification language that supports writing formal specifications of a wide variety of systems. 
We use the tool IPSG, which can automate the manual writing task, to produce the proof scores. 
The CafeOBJ formal specifications, proof scores, and other verification materials available at [https://github.com/duongtd23/Reclamation-CafeOBJ-verification](https://github.com/duongtd23/Reclamation-CafeOBJ-verification).