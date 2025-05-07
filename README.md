# Lab 5
Vishruth Bharath

Link to Pages site: 
- https://vishruthb.github.io/Lab5_Starter/expose.html
- https://vishruthb.github.io/Lab5_Starter/explore.html

---

1) No, I wouldn't use a unit test to test the "message" feature of a messaging application. This is mainly because sending a message isn't something that we can test in isolation, as it probably spans many different things like the client, server, network, etc. This goes beyond the scope of a unit test, and maybe this would be better suited for a test that fully tests the system.

2) Yes, this is a much better alternative to the previous one. Testing the "max message length" feature of a message application is more or less a small piece of logic that can relatively easily be tested in isolation. As a result, this makes it a great candidate for a unit test, as we'd be able to test strings of various lengths and assert the correct behavior, and get tangible results that we can use to verify if the code/functionality is working as expected.