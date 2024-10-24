# Role and Value of test driven development techniques.

## Workflow

- Test-driven development (TDD) is a software development methodology in which tests are created prior to coding.
- TDD begins with the creation of automated tests that specify the software’s expected functionality.
- These tests initially fail because the required code does not yet exist.
- Developers then develop the bare minimum of code necessary to pass the failed tests before progressively refining and upgrading the code to achieve the desired functionality.

## Benefits of Test-Driven Development (TDD) (Parker, 2024)

- **Improved Code Quality**: TDD helps developers write cleaner, more maintainable code by focusing on small, testable units and catching defects early.

- **Faster Feedback Loop**: Writing tests before code ensures quick detection of errors, reducing debugging time later.

- **Reduced Debugging Time**: Early defect detection through tests helps minimize time spent troubleshooting.

- **Greater Confidence in Changes**: Automated tests provide a safety net for code changes, ensuring new updates don’t break existing functionality.

- **Enhanced Collaboration**: TDD fosters collaboration by aligning developers and stakeholders on requirements through test writing, reducing misunderstandings.

- **Design Improvement**: The approach encourages modular, loosely coupled software design, making code easier to maintain and extend.

- **Increased Productivity**: Although TDD requires initial effort, it leads to faster overall project completion due to early error detection.

- **Better Customer Satisfaction**: By validating functionality against predefined acceptance criteria, TDD ensures software meets customer expectations.

## Standard Development Vs. TDD

| **Aspect**                | **Standard Development**                                                      | **Test-Driven Development (TDD)**                                 |
| ------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Code Writing Approach** | Code is written first, tests are often added later                            | Tests are written before the actual code                          |
| **Error Detection**       | Errors are often found during manual testing or late in the development cycle | Errors are detected early through automated tests                 |
| **Code Quality**          | Code quality can vary; often improved through refactoring after testing       | Focuses on writing clean, maintainable code from the start        |
| **Feedback Loop**         | Feedback on defects may take longer as tests come later                       | Immediate feedback as tests are run before coding                 |
| **Debugging Time**        | Can be longer, as issues may arise later and be harder to trace               | Reduced, as issues are caught early in smaller units              |
| **Confidence in Changes** | Riskier; regressions may not be detected until late in the process            | High confidence due to automated tests validating changes         |
| **Collaboration**         | May lead to misunderstandings if tests aren’t clearly defined early           | Promotes collaboration, with tests acting as shared documentation |
| **Code Design**           | Often designed without much focus on modularity; refactoring needed later     | Encourages modular, loosely coupled design from the start         |
| **Development Speed**     | Faster to start, but debugging and refactoring can slow down progress later   | Slower to start but faster overall due to fewer late-stage issues |
| **Customer Satisfaction** | Can vary, as bugs or unmet requirements might surface late                    | Higher satisfaction due to early validation of requirements       |

## Real world testimonials (Reddit.com, 2024)

1. > I can only speak for the big tech companies where I have extensive contacts (that's Google, Microsoft, Meta) as well as the many tier-two and tier-three tech companies I've worked at or know people at.
   > Very few companies practice strict test first development or behavior driven design. But almost all major companies heavily emphasize test writing. Generally, the approach is pragmatic. We care that the code is effectively tested, but don't really care if you write tests then code, code then tests, some hybrid. It is also worth noting that approaches to testing need to be tuned to the product under test.
   > Testing a web app you can roll back in 2 minutes and has no user data is very different from testing an operating system that'll be run on millions of devices where you can't force patch.

2. > Automated testing is SUPER important at all of the FAANG companies. That said, formal TDD "always write the tests first" practices are, in my experience, pretty rare.

#### References

Parker, T. (2024). The Importance of Test-Driven Development (TDD) in Software Development. [online] Medium. Available at: <https://medium.com/@michealanderson00100/the-importance-of-test-driven-development-tdd-in-software-development-0a104ed30767> [Accessed 24 Oct. 2024].

Reddit.com. (2024). Reddit - Dive into anything. [online] Available at: <https://www.reddit.com/r/learnprogramming/comments/v6eoan/do_faang_companies_use_tddbdd_practices/> [Accessed 24 Oct. 2024].

‌

‌
