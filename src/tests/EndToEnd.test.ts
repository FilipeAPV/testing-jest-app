import puppeteer, { Browser, Page } from "puppeteer";

const BASE_URL = "http://localhost:3000";

let browser: Browser;
let page: Page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true,
    //slowMo: 50,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

describe("Todo Application E2E Test", () => {
  const randomText = Math.random().toString(36).substring(7);

  it("should display the homepage with correct title", async () => {
    await page.goto(BASE_URL);
    await page.waitForSelector("h3");

    const heading = await page.$eval("h3", (el) => el.textContent);
    expect(heading).toBe("Task Manager");
  });

  it("should add a new todo item and verify its presence in the list", async () => {
    // Step 1: Select the input field
    const inputSelector = 'input[name="title"]';
    await page.waitForSelector(inputSelector);
    await page.click(inputSelector);
    await page.type(inputSelector, randomText);

    // Step 2: Click the "Add" button to submit the new task
    const addButtonSelector = 'button[type="submit"]';
    await page.waitForSelector(addButtonSelector);
    await page.click(addButtonSelector);

    // Step 3: Verify that the new task appears in the todo list
    const todoListSelector = "ul.space-y-2";
    await page.waitForSelector(todoListSelector);

    await page.waitForFunction(
      (selector, randomText) => {
        const listItems = Array.from(
          document.querySelectorAll(`${selector} li`)
        );
        return listItems.some((li) => li.textContent?.includes(randomText));
      },
      {},
      todoListSelector,
      randomText
    );
  }, 10000);

  it("should delete the previously added todo item and verify its removal", async () => {
    // Step 1: Locate the <li> element that contains the randomText
    await page.waitForSelector("ul.space-y-2");
    const todoItems = await page.$$("ul.space-y-2 li");
    let itemFound = false;

    for (const item of todoItems) {
      const text = await item.$eval("span", (el) => el.textContent?.trim());
      if (text === randomText) {
        itemFound = true;
        // Step 2: Click the delete button within this <li>
        const deleteButton = await item.$(
          'button[data-testid="delete-button"]'
        );
        if (deleteButton) {
          await deleteButton.click();
          break;
        }
      }
    }

    expect(itemFound).toBe(true);

    // Step 4: Verify that the item has been removed from the list
    await page.waitForFunction(
      (selector, text) => {
        const listItems = Array.from(
          document.querySelectorAll(`${selector} li`)
        );
        return !listItems.some((li) => li.textContent?.includes(text));
      },
      {},
      "ul.space-y-2",
      randomText
    );
  }, 10000);
});
