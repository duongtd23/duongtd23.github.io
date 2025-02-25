---
layout: page
title: Hybrid Post-Quantum TL formal analysis in Maude-NPA
description: 
#  
img: 
importance: 3
category: post-quantum
related_publications: true
---

In 2019, the Amazon Web Services (AWS) team has proposed a quantum-resistant version of the Transport Layer Security (TLS) 1.2 protocol, namely the Hybrid Post-Quantum TLS Protocol, where TLS is known as one of the most important cryptographic protocols, protecting numerous communications over the Internet every day. Two parallel key exchange schemes are employed in the proposed protocol, namely a classical key exchange algorithm and a post-quantum key encapsulation mechanism (KEM), which is the reason why the word "hybrid" is used in its name.

This project presents a security formal analysis of the Hybrid Post-Quantum TLS protocol using Maude-NPA and its parallel version (Par-Maude-NPA) {% cite DBLP:conf/icfem/TranD0022 DBLP:journals/peerj-cs/TranDEO23 %}.
Maude-NPA is a powerful tool for analyzing cryptographic protocols based on narrowing and backward search.
For modeling intruders’ capabilities, the tool uses the Dolev-Yao intruder model and the strand model. In this manner, the intruder is given the capability of fully controlling the network, for example, intercepting & modifying messages and impersonating some protocol participants to send some messages to other participants.

One of our assumptions about the intruder's capabilities is that the intruder is able to break the security of the classical key exchange algorithm by utilizing the power of large quantum computers. The security properties under analysis are (1) the secrecy property of the shared secret key established between two honest principals with the classical key exchange algorithm, (2) a similar secrecy property but with the post-quantum key encapsulation mechanism, and (3) the authentication property. Given the time limit T = 1722 hours (72 days), Par-Maude-NPA found a counterexample of (1) at depth 12 in T, while Maude-NPA did not find it in T. As the same time T, Par-Maude-NPA did not find any counterexamples of (2) and (3) up to depths 12 and 18, respectively, and neither did Maude-NPA. Therefore, the protocol does not enjoy (1), while it enjoys (2) and (3) up to depths 12 and 18, respectively. Subsequently, the secrecy property of the master secret holds for the protocol up to depth 12.
