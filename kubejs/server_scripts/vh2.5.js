/* scripts made by a1qs
for Vault Hunters 2.5 */

//temp
let chalCrys0 = Item.of('the_vault:vault_crystal', '{CrystalData:{rooms:[],canBeModified:0b,canTriggerInfluences:0b,canGenerateTreasureRooms:0b,Challenge:1b,PlayerBossName:"",Objective:"the_vault:summon_and_kill_boss",Type:"CLASSIC",preventsRandomModifiers:1b,targetObjectiveCount:6,echoData:{echoCount:0},Modifiers:[{Operation:0,Name:"Treasure"},{Operation:0,Name:"Treasure"},{Operation:0,Name:"Treasure"},{Operation:0,Name:"Safe Zone"},{Operation:0,Name:"Locked"},{Operation:0,Name:"Rush"},{Operation:0,Name:"Rush"}]}}')
let chalCrys0_COOP = Item.of('the_vault:vault_crystal', '{CrystalData:{rooms:[],Frame:{Tiles:[]},canBeModified:0b,canTriggerInfluences:0b,canGenerateTreasureRooms:0b,Challenge:1b,PlayerBossName:"",Objective:"the_vault:summon_and_kill_boss",Type:"COOP",preventsRandomModifiers:1b,targetObjectiveCount:6,echoData:{echoCount:0},Modifiers:[{Operation:0,Name:"Treasure"},{Operation:0,Name:"Treasure"},{Operation:0,Name:"Treasure"},{Operation:0,Name:"Safe Zone"},{Operation:0,Name:"Locked"},{Operation:0,Name:"Rush"},{Operation:0,Name:"Rush"}]}}')

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

    // temp
    event.shaped(chalCrys0_COOP, [chalCrys0])
})