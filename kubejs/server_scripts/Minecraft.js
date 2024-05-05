/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs & monkyman640 to KubeJS */

let colors = ["white","orange","magenta","light_blue","yellow","lime","pink","gray","cyan","purple","blue","brown","green","black","light_gray"]

onEvent('recipes', event => {

	event.shaped('minecraft:shield', [
		'BGB',
		'BBB',
		' O ' 
	], {
		B: 'quark:biotite_block',
		G: 'the_vault:perfect_painite',
		O: 'minecraft:oak_log'
	})

    event.shaped('minecraft:shield', [
        'BGB',
        'BBB',
        ' O ' 
    ], {
        B: 'quark:biotite_block',
        G: 'the_vault:perfect_alexandrite',
        O: 'minecraft:oak_log'
    })

	event.shaped('minecraft:iron_horse_armor', [
		'  I',
		'III',
		'G G' 
	 ], {
		I: 'minecraft:iron_ingot',
		G: 'the_vault:perfect_painite'
	})

	event.shaped('minecraft:golden_horse_armor', [
		'  I',
		'III',
		'G G' 
	 ], {
		I: 'minecraft:gold_ingot',
		G: 'the_vault:perfect_alexandrite'
	})

	event.shaped('minecraft:diamond_horse_armor', [
		'  I',
		'III',
		'G G' 
	], {
		I: 'minecraft:diamond_block',
		G: 'the_vault:perfect_black_opal'
	})

	event.shaped('minecraft:golden_apple', [
		'GGG',
		'GAG',
		'GGG' 
	 ], {
		G: 'minecraft:gold_block',
		A: 'minecraft:apple'
	})

	event.shaped('minecraft:dragon_head', [
		'OEO',
		'GWG',
		'OOO' 
	], {
		O: 'crying_obsidian',
		E: 'minecraft:ender_eye',
		G: 'the_vault:gem_wutodie',
		W: 'minecraft:wither_skeleton_skull'
	})

	event.shaped('minecraft:nautilus_shell', [
		'QBQ',
		'BRB',
		'QBQ' 
	], {
		Q: 'minecraft:quartz',
		B: 'the_vault:gem_benitoite',
		R: 'minecraft:rotten_flesh'
	})

	event.shaped('minecraft:heart_of_the_sea', [
		' B ',
		'BDB',
		' B ' 
	], {
		B: 'the_vault:perfect_benitoite',
		D: 'minecraft:diamond_block'
	})

	event.shaped('minecraft:phantom_membrane', [
		' L ',
		'LQL',
		' L ' 
	], {
	 	L: 'the_vault:gem_larimar',
		Q: 'minecraft:quartz'
	})

	event.shaped('minecraft:trident', [
		'LLL',
		' N ',
		' B ' 
	], {
		L: 'the_vault:gem_larimar',
		N: 'netherite_ingot',
		B: 'the_vault:perfect_benitoite'
	})

	event.shaped('minecraft:turtle_egg', [
		' L ',
		'LEL',
		' L ' 
	], {
		L: 'the_vault:gem_larimar',
		E: 'minecraft:egg'
	})

	event.shaped('minecraft:music_disc_11', [
		' W ',
		'WBW',
		' W ' 
	], {
		W: 'the_vault:gem_wutodie',
		B: 'the_vault:perfect_black_opal'
	})

	event.shaped('minecraft:honeycomb', [
		' A ',
		'AHA',
		' A ' 
	], {
		A: 'the_vault:gem_alexandrite',
		H: 'minecraft:honey_block'
	})

	event.shaped('minecraft:elytra', [
        'PLP',
        'WAW',
        'M M'
    ], {
        P: '#the_vault:perfectcommongems',
		L: 'minecraft:leather',
        W: '#minecraft:wool',
        A: 'the_vault:perfect_alexandrite',
		M: 'minecraft:phantom_membrane'
    })
	
	event.shapeless(Item.of('suspicious_stew', '{Effects:[{EffectId:10b,EffectDuration:160}]}'), ['the_vault:vault_essence', 'red_mushroom', 'brown_mushroom', 'bowl'])
	event.shapeless(Item.of('suspicious_stew', '{Effects:[{EffectId:18b,EffectDuration:180}]}'), ['red_tulip', 'red_mushroom', 'brown_mushroom', 'bowl'])
	event.shapeless(Item.of('suspicious_stew', '{Effects:[{EffectId:18b,EffectDuration:180}]}'), ['orange_tulip', 'red_mushroom', 'brown_mushroom', 'bowl'])
	event.shapeless(Item.of('suspicious_stew', '{Effects:[{EffectId:18b,EffectDuration:180}]}'), ['white_tulip', 'red_mushroom', 'brown_mushroom', 'bowl'])
	event.shapeless(Item.of('suspicious_stew', '{Effects:[{EffectId:18b,EffectDuration:180}]}'), ['pink_tulip', 'red_mushroom', 'brown_mushroom', 'bowl'])
	event.shapeless(Item.of('suspicious_stew', '{Effects:[{EffectId:12b,EffectDuration:80}]}'), ['allium', 'red_mushroom', 'brown_mushroom', 'bowl'])
	event.shapeless(Item.of('suspicious_stew', '{Effects:[{EffectId:20b,EffectDuration:80}]}'), ['wither_rose', 'red_mushroom', 'brown_mushroom', 'bowl'])
	event.shapeless(Item.of('suspicious_stew', '{Effects:[{EffectId:15b,EffectDuration:160}]}'), ['azure_bluet', 'red_mushroom', 'brown_mushroom', 'bowl'])
	event.shapeless(Item.of('suspicious_stew', '{Effects:[{EffectId:16b,EffectDuration:100}]}'), ['poppy', 'red_mushroom', 'brown_mushroom', 'bowl'])
	event.shapeless(Item.of('suspicious_stew', '{Effects:[{EffectId:23b,EffectDuration:7}]}'), ['dandelion', 'red_mushroom', 'brown_mushroom', 'bowl'])
	event.shapeless(Item.of('suspicious_stew', '{Effects:[{EffectId:23b,EffectDuration:7}]}'), ['blue_orchid', 'red_mushroom', 'brown_mushroom', 'bowl'])
	event.shapeless(Item.of('suspicious_stew', '{Effects:[{EffectId:8b,EffectDuration:120}]}'), ['cornflower', 'red_mushroom', 'brown_mushroom', 'bowl'])
	event.shapeless(Item.of('suspicious_stew', '{Effects:[{EffectId:19b,EffectDuration:240}]}'), ['lily_of_the_valley', 'red_mushroom', 'brown_mushroom', 'bowl'])

	colors.forEach(colors =>{
		event.shapeless('minecraft:'+colors+'_shulker_box', ['#forge:shulker_boxes', '#forge:dyes/'+colors])
	})
})