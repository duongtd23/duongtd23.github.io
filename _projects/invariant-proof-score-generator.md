---
layout: page
title: IPSG - Invariant Proof Score Generator
description: 
#  
img: 
importance: 1
category: mixed
related_publications: true
---

We propose an approach and implement a tool, called IPSG (Invariant Proof Score Generator), that can automatically generate proof scores for formal invariant property verification 
{% cite DBLP:conf/compsac/TranO22 DBLP:journals/compsec/TranO22 %}. 
By using the tool, human users only need to focus on solving non-trivial sub-cases, which typically require additional lemmas, but trivial sub-cases are already discharged by the tool. 
The formal verification approach by using IPSG is visualized in following figure. 

![IPSG](/assets/img/projects/ipsg.jpg){: width="600"}

Providing a CafeOBJ formal specification, state predicates together with an auxiliary lemma collection, IPSG can generate the proof scores of those properties. The tool was implemented by using CafeInMaude, the second major implementation of CafeOBJ in the Maude environment. How the tool operates can be briefly summarized as follows. Given an open-close fragment, IPSG uses the Maude metalevel functionalities to reduce the goal to a term `x`. If `x` is neither true nor false, a sub-term of `x`, let's say `x'`, will be chosen by IPSG to split the current case associated with that open-close fragment into two sub-cases: one when `x'` holds and the other one when it does not. The same procedure is applied for each sub-case until either true or false is returned for the reduction. When false is returned, IPSG tries to discharge the associated case by finding a suitable lemma from the lemma collection provided by human users. Some heuristics techniques were implemented for choosing case splitting order, i.e., choosing the sub-term `x'` at each step. For instance, for each induction case, the highest priority is given to those case splittings to reduce the effective condition of the associated transition to either true or false.

To demonstrate the efficiency and the practicability of the tool, we conduct experiments with various systems/protocols, ranging from a classical key distribution protocol to authentication protocols, from a cloud synchronization protocol to mutual exclusion protocols, and from a distributed protocol to real cryptographic protocols currently in use. 
The source code of the tool is publicly available at [https://github.com/duongtd23/IPSG-tool](https://github.com/duongtd23/IPSG-tool), while the experiments are available at [https://github.com/duongtd23/IPSG-TLS](https://github.com/duongtd23/IPSG-TLS).
