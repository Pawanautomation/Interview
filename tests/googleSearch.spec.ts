import{test,expect} from '@playwright/test'

test.describe('',()=>{
    test('google search',async({page})=>{
        const itemSearch='pen'
        await page.goto('https://www.google.com/')
        await page.locator("//div[text()='Accept all']").click()
        await page.locator("//textarea[@title='Search']").fill(itemSearch)
        await page.waitForSelector('//ul[@role="listbox"]/li')
        await page.screenshot({path:"some.png"})
        const list=await page.$$('//ul[@role="listbox"]/li')
        for(const item of list){
            console.log(await item.innerText())
        }
        await list[1].click()

    })
})