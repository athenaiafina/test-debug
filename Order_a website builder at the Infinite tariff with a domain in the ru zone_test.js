Feature('Website builder');

Scenario('Order a website builder at the Infinite tariff with a domain in the ru zone', async ({ I }) => {

I.amOnPage('/');
I.see('Бесконечный');
let x = await I.grabTextFrom('#content > div:nth-child(2) > form > div > div.b-plans-pillar__item.b-plans-pillar__item_type_infinite.i-analytics.i-analytics_event_google.i-analytics_event_yandex > div > div.b-plans-pillar__price-wrapper.b-popup-discount__toggle.l-rel > p');
I.click('Заказать','div.b-plans-pillar__item.b-plans-pillar__item_type_infinite.i-analytics.i-analytics_event_google.i-analytics_event_yandex');
I.fillField('domain', 'tesss.ru');
I.click('div.builder > div.push-footer > div > div.wrap__center > div:nth-child(4) > div > div > div > div > div.order-new-domain > div.check-domains > div > div > div > div:nth-child(1)');
let y = await I.grabTextFrom('body > div > div.builder > div.push-footer > div > div.wrap__center > div:nth-child(4) > div > div > div > div > div.available-domain-in-order__info > div > div.domain-in-order-price.b-title.b-title_margin_none.available-domain-in-order__price > span');
});