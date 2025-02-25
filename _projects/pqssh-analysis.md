---
layout: page
title: Formal analysis of Post-Quantum Hybrid Key Exchange SSH Transport Layer Protocol
description: 
#  
img: 
importance: 2
category: post-quantum
related_publications: true
---

Facing the quantum attack threat, a quantum-resistant version of the SSH Transport Layer protocol has been proposed and been standardized by an IETF working group. This standardization process has been motivated by the fact that if practical quantum computers become available, classical key exchange algorithms used today will no longer be safe because their security can be efficiently broken by Shor's algorithm running on a quantum computer. 

In this work {% cite DBLP:journals/access/TranOEAO24 %}, we construct a symbolic model of the proposed protocol, specify it in the specification language CafeOBJ, and conduct a formal analysis of the claimed security properties with the employment of a the Invariant Proof Score Generator (IPSG) tool. 
Our formal verification showed that the protocol enjoys three desired security properties including (1) **session key secrecy**, (2) **forward secrecy**, and (3) **session identifier uniqueness**, where IPSG is used to generate the proof scores. T
he verifications are achieved with respect to an unbounded number of protocol participants and session executions.

With another property, namely **authentication**, we find a counterexample against it, and then we propose to slightly revise the protocol. With the improved version, we formally verify that the authentication property is enjoyed, while the three properties remain secure. To model the presence of malicious participants, we extend the Dolev-Yao intruder, which is the standard intruder model used in security protocol analysis/verification, because the availability assumption of large-scale quantum computers gives the attacker some new capabilities. Under our threat model, the intruder is given capabilities of fully controlling the network as the Dolev-Yao intruder, and additionally breaking ECDH’s security as well as compromising secrets.
