import LoginPage from '../pageobjects/login.page.js'
// import SecurePage from '../pageobjects/secure.page.js'

describe('Kategori Feature', () => {
    it('User click Kategori', async () => {
        browser.setWindowSize(1537, 976)
        await LoginPage.open()
        await browser.pause(25000) 

        await LoginPage.login('bbb@gm.com', '12345') 

        await $('#root > div > div > div.css-tnxwfz > div > a:nth-child(6)').click()
        await browser.pause(3000)
        
    })

    it('User create a new Kategori', async () => {

        await $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()

        await $('#nama').setValue('Minuman Dingin')
        await $('#deskripsi').setValue('Kumpulan Minuman Dingin Menyegarkan')
        await $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()
        
        const alert = await $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > table > tbody > tr:nth-child(1) > td:nth-child(1)')
        await expect(alert).toHaveElementClass('css-u3dlpe', { message: 'Minuman Dingin', })
        await browser.pause(3000)  
    })

    it('User create a new Kategori input field with empty value', async () => {

        await $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()

        await $('#deskripsi').setValue('Kumpulan Minuman Dingin Menyegarkan')
        await $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()
        
        const alert = await $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3')
        await expect(alert).toHaveElementClass('chakra-alert', { message: '"name" is not allowed to be empty', })
        await browser.pause(3000)
        await $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-tyo1sz > h2 > a:nth-child(2)').click()
    })

    it('User search Kategori', async () => {

        await $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.css-6co16k > div > div').click()
        
        await $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.css-6co16k > div > div > input').setValue('Minuman')
        
        const alert = await $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > table > tbody > tr:nth-child(1) > td:nth-child(1)')
        await expect(alert).toHaveElementClass('css-u3dlpe', { message: 'Minuman', })
        
        await browser.pause(3000)
        await $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.css-6co16k > div > div > input').clearValue()
    })

    it('User search Kategori with wrong nama kategori ', async () => {

        await $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.css-6co16k > div > div').click()
        
        await $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.css-6co16k > div > div > input').setValue('Makanan')
        
        await browser.pause(3000)
        await $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.css-6co16k > div > div > input').clearValue()
    })

})


