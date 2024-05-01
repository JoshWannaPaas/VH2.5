/* scripts made by a1qs
for Vault Hunters 2.5 */

onEvent('recipes', event => {

    event.shaped(Item.of('the_vault:vault_paxel', '{Damage:0,ShouldEnhance:0b,Enhancement:{Id:"the_vault:fortunate"},display:{Name:\'["",{"text":"Fortunate Paxel","italic":false,"color":"#ffb31a","bold":true}]\'}}') , [
        'PCP',
        'EVE',
        'PCP'
    ], {
        P: 'the_vault:vault_paxel',
        C: 'the_vault:paxel_charm',
        E: 'the_vault:echo_pog',
        V: 'the_vault:vault_diamond_block'
    })

})