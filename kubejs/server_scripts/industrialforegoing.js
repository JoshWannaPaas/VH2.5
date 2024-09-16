/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by xD0R0x to KubeJS */

onEvent('recipes', event => {

// adding recipes

    event.shaped('1x industrialforegoing:machine_frame_pity', [
        'LWL',
        'BRB',
        'LWL'
    ], {
        L: '#minecraft:logs',
        W: 'the_vault:perfect_wutodie',
        B: 'the_vault:perfect_benitoite',
        R: 'compressium:redstone_2'
    })

    event.shaped('1x industrialforegoing:material_stonework_factory', [
        'PEP',
        'DMB',
        'OSO'
    ], {
        P: '#forge:plastic',
        E: 'the_vault:echo_pog',
        D: 'minecraft:diamond_pickaxe',
        M: 'industrialforegoing:machine_frame_advanced',
        B: 'minecraft:blast_furnace',
        O: 'the_vault:omega_pog',
        S: 'industrialforegoing:pink_slime_ingot'
    })

    event.shaped('1x industrialforegoing:enchantment_extractor', [
        'PNP',
        'LML',
        'OEO'
    ], {
        P: '#forge:plastic',
        O: 'the_vault:omega_pog',
        E: 'the_vault:echo_pog',
        N: 'the_vault:spark',
        L: 'minecraft:lectern',
        M: 'industrialforegoing:machine_frame_supreme'
    })

    event.shaped('1x industrialforegoing:mob_crusher', [
        'PWP',
        'LML',
        'GRG'
    ], {
        P: '#forge:plastic',
        W: 'the_vault:perfect_wutodie',
        L: 'minecraft:lectern',
        M: 'industrialforegoing:machine_frame_advanced',
        G: '#forge:gears/gold',
        R: 'compressium:redstone_1'
    })

    event.shaped('1x industrialforegoing:dryrubber', [
        'DDD',
        'DGD',
        'DDD'
    ], {
        D: 'industrialforegoing:tinydryrubber',
        G: '#the_vault:perfectcommongems'
    })

    event.shaped('1x industrialforegoing:dissolution_chamber', [
        'PAP',
        'GMG',
        'DOD'
    ], {
        P: 'industrialforegoing:plastic',
        A: 'the_vault:vault_crate_arena',
        G: 'compressium:gold_1',
        M: 'industrialforegoing:machine_frame_pity',
        D: 'the_vault:vault_diamond_block',
        O: 'the_vault:omega_pog'
    })

    event.shaped('1x industrialforegoing:latex_processing_unit', [
        'ARA',
        'LMW',
        'APA'
    ], {
        A: 'the_vault:perfect_alexandrite',
        R: 'compressium:redstone_2',
        P: 'the_vault:gem_pog',
        L: 'industrialforegoing:latex_bucket',
        M: 'industrialforegoing:machine_frame_pity',
        W: 'minecraft:water_bucket'
    })

    event.shaped('1x industrialforegoing:fluid_extractor', [
        'OGO',
        'SMS',
        'OIO'
    ], {
        O: 'the_vault:perfect_black_opal',
        G: 'compressium:gold_2',
        S: 'compressium:stone_3',
        M: 'industrialforegoing:machine_frame_pity',
        I: 'the_vault:vault_ingot'
    })

    event.shaped('1x industrialforegoing:ore_laser_base', [
        'PNP',
        'IMI',
        'BOB'
    ], {
        P: 'industrialforegoing:plastic',
        N: 'minecraft:netherite_block',
        I: 'compressium:iron_3',
        M: 'industrialforegoing:machine_frame_supreme',
        B: 'the_vault:perfect_black_opal',
        O: 'the_vault:omega_pog'
    })

    event.shaped('1x industrialforegoing:laser_drill', [
        'PNP',
        'GMG',
        'BEB'
    ], {
        P: 'industrialforegoing:plastic',
        N: 'minecraft:netherite_block',
        B: 'the_vault:perfect_black_opal',
        E: 'the_vault:echo_pog',
        G: '#the_vault:playergems',
        M: 'industrialforegoing:machine_frame_advanced'
    })

    event.shaped('1x industrialforegoing:fluid_laser_base', [
        'PNP',
        'VMV',
        'BOB'
    ], {
        B: 'the_vault:perfect_black_opal',
        O: 'the_vault:omega_pog',
        P: 'industrialforegoing:plastic',
        N: 'minecraft:netherite_block',
        M: 'industrialforegoing:machine_frame_supreme',
        V: 'the_vault:void_liquid_bucket'
    })

    event.shaped('1x industrialforegoing:pity_black_hole_unit', [
        'PPP',
        'WBW',
        'GMG'
    ], {
        P: 'industrialforegoing:plastic',
        W: 'quark:ender_watcher',
        G: '#the_vault:perfectcommongems',
        M: 'industrialforegoing:machine_frame_simple',
        B: 'industrialforegoing:common_black_hole_unit'
    })

    event.shaped('1x industrialforegoing:simple_black_hole_unit', [
        'PPP',
        'EBE',
        'WMW'
    ], {
        P: 'industrialforegoing:plastic',
        E: 'quark:ender_watcher',
        B: 'industrialforegoing:pity_black_hole_unit',
        W: 'the_vault:perfect_wutodie',
        M: 'industrialforegoing:machine_frame_simple'
    })

    event.shaped('1x industrialforegoing:advanced_black_hole_unit', [
        'PPP',
        'EBE',
        'OMO'
    ], {
        P: 'industrialforegoing:plastic',
        E: 'quark:ender_watcher',
        B: 'industrialforegoing:simple_black_hole_unit',
        O: 'the_vault:perfect_black_opal',
        M: 'industrialforegoing:machine_frame_advanced'
    })

    event.shaped('1x industrialforegoing:supreme_black_hole_unit', [
        'PPP',
        'EBE',
        'GMG'
    ], {
        P: 'industrialforegoing:plastic',
        E: 'quark:ender_watcher',
        B: 'industrialforegoing:advanced_black_hole_unit',
        G: 'the_vault:gem_pog',
        M: 'industrialforegoing:machine_frame_supreme'
    })

    event.shaped('1x industrialforegoing:pity_black_hole_tank', [
        'PPP',
        'ETE',
        'GMG'
    ], {
        P: 'industrialforegoing:plastic',
        E: 'quark:ender_watcher',
        T: 'industrialforegoing:common_black_hole_tank',
        G: '#the_vault:perfectcommongems',
        M: 'industrialforegoing:machine_frame_simple'
    })

    event.shaped('1x industrialforegoing:pity_black_hole_tank', [
        'PPP',
        'ETE',
        'WMW'
    ], {
        P: 'industrialforegoing:plastic',
        E: 'quark:ender_watcher',
        T: 'industrialforegoing:pity_black_hole_tank',
        W: 'the_vault:perfect_wutodie',
        M: 'industrialforegoing:machine_frame_simple'
    })

    event.shaped('1x industrialforegoing:advanced_black_hole_tank', [
        'PPP',
        'ETE',
        'OMO'
    ], {
        P: 'industrialforegoing:plastic',
        E: 'quark:ender_watcher',
        T: 'industrialforegoing:simple_black_hole_tank',
        O: 'the_vault:perfect_black_opal',
        M: 'industrialforegoing:machine_frame_advanced'
    })

    event.shaped('1x industrialforegoing:supreme_black_hole_tank', [
        'PPP',
        'ETE',
        'GMG'
    ], {
        P: 'industrialforegoing:plastic',
        E: 'quark:ender_watcher',
        T: 'industrialforegoing:advanced_black_hole_tank',
        G: 'the_vault:gem_pog',
        M: 'industrialforegoing:machine_frame_supreme'
    })

<	event.custom({
		"type": "industrialforegoing:dissolution_chamber",
		"input": [
			{"item": "compressium:dirt_2"},
			{"item": "compressium:dirt_2"},
			{"tag": "the_vault:perfectcommongems"},
			{"tag": "the_vault:perfectcommongems"},
			{"tag": "industrialforegoing:machine_frame/pity"},
			{"item": "minecraft:rotten_flesh"},
			{"item": "minecraft:rotten_flesh"}
		],
		"inputFluid": "{FluidName:\"industrialforegoing:meat\",Amount:7000}",
		"processingTime": 600,
		"output": {"item": "industrialforegoing:mechanical_dirt","count": 1}
	})
 
	event.custom({
		"type": "industrialforegoing:dissolution_chamber",
		"input": [
			{"item": "industrialforegoing:plastic"},
			{"tag": "industrialforegoing:machine_frame/pity"},
			{"item": "industrialforegoing:plastic"},
			{"item": "the_vault:perfect_black_opal"},
			{"item": "the_vault:perfect_black_opal"},
			{"item": "minecraft:netherite_ingot"},
			{"item": "compressium:gold_2"},
			{"item": "minecraft:netherite_ingot"}
		],
		"inputFluid": "{FluidName:\"the_vault:void_liquid\",Amount:2000}",
		"processingTime": 400,
		"output": {"item": "industrialforegoing:machine_frame_simple","count": 1}
	})
 
	event.custom({
		"type": "industrialforegoing:dissolution_chamber",
		"input": [
			{"item": "industrialforegoing:plastic"},
			{"tag": "industrialforegoing:machine_frame/simple"},
			{"item": "industrialforegoing:plastic"},
			{"item": "the_vault:gem_pog"},
			{"item": "the_vault:gem_pog"},
			{"item": "minecraft:netherite_block"},
			{"item": "the_vault:vault_diamond_block"},
			{"item": "minecraft:netherite_block"}
		],
		"inputFluid": "{FluidName:\"the_vault:void_liquid\",Amount:4000}",
		"processingTime": 800,
		"output": {"item": "industrialforegoing:machine_frame_advanced","count": 1}
	})
 
	event.custom({
		"type": "industrialforegoing:dissolution_chamber",
		"input": [
			{"item": "industrialforegoing:plastic"},
			{"tag": "industrialforegoing:machine_frame/advanced"},
			{"item": "industrialforegoing:plastic"},
			{"item": "the_vault:echo_pog"},
			{"item": "the_vault:echo_pog"},
			{"item": "the_vault:vault_diamond_block"},
			{"item": "minecraft:netherite_block"},
			{"item": "the_vault:vault_diamond_block"}
		],
		"inputFluid": "{FluidName:\"the_vault:void_liquid\",Amount:8000}",
		"processingTime": 1600,
		"output": {"item": "industrialforegoing:machine_frame_supreme","count": 1}
	})
})