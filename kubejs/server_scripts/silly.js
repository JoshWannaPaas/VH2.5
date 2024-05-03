/* scripts made by a1qs
for Vault Hunters 2.5 */

onEvent('recipes', event => {

    event.shaped(Item.of('botania:terra_pick', "{RepairCost:0,mana:2147483647,Damage:0,enabled:0b,display:{Name:'{\"text\":\"Why would you craft me\"}'}}"), [
        'SOS',
        'OTO',
        'SOS'
    ], {
        S: 'the_vault:spark',
        O: 'the_vault:omega_pog',
        T: 'botania:terra_pick'
    })
})