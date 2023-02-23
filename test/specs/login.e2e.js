import LoginPage from '../pageobjects/login.page.js'
// import SecurePage from '../pageobjects/secure.page.js'

describe('Login Feature', () => {
    it('User login with invalid email', async () => {
        browser.setWindowSize(1537, 976)
        await LoginPage.open()

        await LoginPage.login('aaa@gm.@com', '12345')
        await browser.pause(1000)

        const alert = await $('#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3')
        await expect(alert).toHaveElementClass('chakra-alert', { message: '"email" must be a valid email', })
        await browser.pause(2000)
    })

    it('User login with invalid password', async () => {

        await LoginPage.open()

        await LoginPage.login('bbb@gm.com', '12345!')
        await browser.pause(1000)

        const alert = await $('#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3')
        await expect(alert).toHaveElementClass('chakra-alert', { message: 'Kredensial yang Anda berikan salah', })
        await browser.pause(2000)
    })

    it('User login with valid username and password', async () => {

        await LoginPage.open()

        await LoginPage.login('bbb@gm.com', '12345')
        await browser.pause(1000) 

        const alert = await $('#root > div > div > div.css-tnxwfz > div > h3')
        await expect(alert).toHaveElementClass('chakra-heading', { message: 'kasirAja', })
        await browser.pause(3000)
    })

})


