/* scripts made by a1qs
for Vault Hunters 2.5 */

onEvent('block.right_click', event =>{
    if( event.block.id == 'minecraft:stone' && event.hand == MAIN_HAND && event.item.id == 'the_vault:hunter_eye')
        var bx = event.block.getX()
        var by = event.block.getY()
        var bz = event.block.getZ()
        var particleEffect = 'minecraft:end_rod'

        let itemEntity = event.level.createEntity('minecraft:item')
            itemEntity.setX(bx + 0.5)
            itemEntity.setY(by + 1.0)
            itemEntity.setZ(bz + 0.5)
            itemEntity.item = Item.of('the_vault:ore_vault_rock')
            itemEntity.spawn()
            event.server.runCommandSilent(`playsound minecraft:block.beacon.power_select master @a ${bx} ${by} ${bz}`)
            event.server.runCommandSilent(`particle ${particleEffect} ${bx} ${by+1} ${bz} 0.2 0.2 0.2 0.2 5 normal`)
})      