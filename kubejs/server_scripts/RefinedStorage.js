onEvent('recipes', event => {

    event.shaped('refinedstorage:machine_casing', [
        'QQQ',
        'QAQ',
        'QQQ'
    ], {
        Q: 'refinedstorage:quartz_enriched_iron',
        A: 'the_vault:perfect_alexandrite'
    })

    event.shaped('refinedstorage:crafter', [
        'QPQ',
        'AMA',
        'QPQ'
    ], {
        Q: 'refinedstorage:quartz_enriched_iron',
        P: 'the_vault:gem_pog',
        A: 'refinedstorage:advanced_processor',
        M: 'refinedstorage:machine_casing'
    })

    event.shaped('refinedstorage:1k_storage_part', [
        'SQS',
        'LAL',
        'SLS'
    ], {
        S: '#forge:silicon',
        Q: 'refinedstorage:quartz_enriched_iron',
        L: '#the_vault:commongems',
        A: 'the_vault:gem_alexandrite'
    })

    event.shaped('refinedstorage:4k_storage_part', [
        'WNW',
        'KAK',
        'WKW'
    ], {
        W: 'the_vault:perfect_wutodie',
        A: 'the_vault:vault_diamond',
        K: 'refinedstorage:1k_storage_part',
        N: 'the_vault:perfect_alexandrite'
    })

    event.shaped('refinedstorage:16k_storage_part', [
        'BIB',
        'KWK',
        'BKB'
    ], {
        B: 'the_vault:vault_diamond',
        I: 'the_vault:extraordinary_alexandrite',
        K: 'refinedstorage:4k_storage_part',
        W: 'the_vault:perfect_black_opal'
    })

    event.shaped('refinedstorage:64k_storage_part', [
        'PIP',
        'KEK',
        'PKP'
    ], {
        P: 'the_vault:perfect_black_opal',
        E: 'the_vault:extraordinary_alexandrite',
        K: 'refinedstorage:16k_storage_part',
        I: 'the_vault:gem_echo'
    })

    event.shaped('refinedstorage:wireless_grid', [
        'QAQ',
        'QGQ',
        'QAQ'
    ], {
        Q: 'refinedstorage:quartz_enriched_iron',
        A: 'the_vault:perfect_alexandrite',

        G: 'refinedstorage:grid'
    })
    event.shaped('refinedstorage:wireless_fluid_grid', [
        'QAQ',
        'QFQ',
        'QAQ'
    ], {
        Q: 'refinedstorage:quartz_enriched_iron',
        A: 'the_vault:perfect_alexandrite',
        F: 'refinedstorage:fluid_grid'
    })

    event.shaped('refinedstorageaddons:wireless_crafting_grid', [
        'QAQ',
        'QCQ',
        'QAQ'
    ], {
        Q: 'refinedstorage:quartz_enriched_iron',
        A: 'the_vault:perfect_alexandrite',
        C: 'refinedstorage:crafting_grid'
    })

    event.shaped('refinedstorage:wireless_crafting_monitor', [
        'QAQ',
        'QCQ',
        'QAQ'
    ], {
        Q: 'refinedstorage:quartz_enriched_iron',
        A: 'the_vault:perfect_alexandrite',
        C: 'refinedstorage:crafting_monitor'
    })

    event.shaped('refinedstorage:grid', [
        'IDB',
        'QMB',
        'ICB'
    ], {
        Q: 'refinedstorage:quartz_enriched_iron',
        D: 'refinedstorage:destruction_core',
        B: 'the_vault:perfect_benitoite',
        I: 'refinedstorage:improved_processor',
        M: 'refinedstorage:machine_casing',
        C: 'refinedstorage:construction_core',
    })

    event.shapeless('refinedstorage:crafting_grid', [
        'refinedstorage:grid',
        'refinedstorage:advanced_processor',
        'the_vault:perfect_larimar',
        'minecraft:crafting_table',
        'the_vault:perfect_larimar',
        'the_vault:perfect_larimar',
        'the_vault:gem_pog'
    ])

    event.shapeless('refinedstorageaddons:wireless_crafting_grid', [
        'refinedstorage:wireless_grid',
        'refinedstorage:advanced_processor',
        'the_vault:perfect_larimar',
        'minecraft:crafting_table',
        'the_vault:perfect_larimar',
        'the_vault:perfect_larimar',
        'the_vault:gem_pog'
    ])

    event.shapeless('refinedstorage:pattern_grid', [
        'refinedstorage:grid',
        'refinedstorage:advanced_processor',
        'the_vault:perfect_larimar',
        'refinedstorage:pattern',
        'the_vault:perfect_larimar',
        'the_vault:perfect_larimar'
    ])

    event.shapeless('refinedstorage:fluid_grid', [
        'refinedstorage:grid',
        'refinedstorage:advanced_processor',
        'the_vault:perfect_larimar',
        'minecraft:bucket',
        'the_vault:perfect_larimar',
        'the_vault:perfect_larimar'
    ])

    event.shaped('refinedstorage:controller', [
        'BAB',
        'SMS',
        'LEL'
    ], {
        S: '#forge:silicon',
        B: 'the_vault:perfect_black_opal',
        L: 'the_vault:perfect_larimar',
        A: 'refinedstorage:advanced_processor',
        M: 'refinedstorage:machine_casing',
        E: 'the_vault:gem_pog'
    })

    event.shaped('refinedstorage:disk_drive', [
        'GCG',
        'QMQ',
        'GPG'
    ], {
        G: '#the_vault:perfectcommongems',
        C: '#forge:chests',
        Q: 'refinedstorage:quartz_enriched_iron',
        M: 'refinedstorage:machine_casing',
        P: 'the_vault:gem_pog'
    })

    event.shaped('refinedstorage:disk_manipulator', [
        'QSQ',
        'LML',
        'QPQ'
    ], {
        Q: 'refinedstorage:quartz_enriched_iron',
        S: 'refinedstorage:storage_housing',
        L: 'the_vault:gem_larimar',
        M: 'refinedstorage:machine_casing',
        P: 'the_vault:gem_pog'
    })

    event.shaped('refinedstorage:detector', [
        'LRL',
        'CMC',
        'LIL'
    ], {
        L: 'the_vault:gem_larimar',
        R: 'minecraft:redstone_torch',
        C: 'minecraft:comparator',
        M: 'refinedstorage:machine_casing',
        I: 'refinedstorage:improved_processor'
    })

    event.shaped('refinedstorage:external_storage', [
        'OQD',
        'CAC',
        'LIL'
    ], {
        O: 'refinedstorage:construction_core',
        Q: 'refinedstorage:quartz_enriched_iron',
        D: 'refinedstorage:destruction_core',
        C: '#forge:chests',
        A: 'refinedstorage:cable',
        L: 'the_vault:perfect_larimar',
        I: 'refinedstorage:improved_processor'
    })

    event.shapeless('refinedstorage:importer', [
        'refinedstorage:cable',
        'refinedstorage:improved_processor',
        'the_vault:gem_larimar',
        'refinedstorage:destruction_core',
        'the_vault:gem_larimar',
        'the_vault:gem_larimar'
    ])

    event.shapeless('refinedstorage:exporter', [
        'refinedstorage:cable',
        'refinedstorage:improved_processor',
        'the_vault:gem_larimar',
        'refinedstorage:construction_core',
        'the_vault:gem_larimar',
        'the_vault:gem_larimar'
    ])

    event.shaped('refinedstorage:constructor', [
        'LCL',
        'RAR',
        'LIL'
    ], {
        L: 'the_vault:gem_larimar',
        C: 'refinedstorage:construction_core',
        R: 'compressium:redstone_1',
        A: 'refinedstorage:cable',
        I: 'refinedstorage:improved_processor'
    })

    event.shaped('refinedstorage:destructor', [
        'LDL',
        'RAR',
        'LIL'
    ], {
        L: 'the_vault:gem_larimar',
        D: 'refinedstorage:destruction_core',
        R: 'compressium:redstone_1',
        A: 'refinedstorage:cable',
        I: 'refinedstorage:improved_processor'
    })

    event.shaped('refinedstorage:wireless_transmitter', [
        'BEW',
        'AMA',
        'WIB'
    ], {
        B: 'the_vault:perfect_black_opal',
        E: 'quark:ender_watcher',
        A: 'refinedstorage:advanced_processor',
        M: 'refinedstorage:machine_casing',
        W: 'the_vault:perfect_wutodie',
        I: 'refinedstorage:improved_processor'
    })

    event.shaped('refinedstorage:network_receiver', [
        'ANA',
        'CMD',
        'EPE'
    ], {
        A: 'refinedstorage:advanced_processor',
        N: 'the_vault:cluster_netherite',
        C: 'refinedstorage:construction_core',
        M: 'refinedstorage:machine_casing',
        D: 'refinedstorage:destruction_core',
        E: 'quark:ender_watcher',
        P: '#the_vault:playergems'
    })

    event.shaped('refinedstorage:network_transmitter', [
        'EPE',
        'CMD',
        'ANA'
    ], {
        A: 'refinedstorage:advanced_processor',
        N: 'the_vault:cluster_netherite',
        C: 'refinedstorage:construction_core',
        M: 'refinedstorage:machine_casing',
        D: 'refinedstorage:destruction_core',
        E: 'quark:ender_watcher',
        P: '#the_vault:playergems'
    })

    event.shaped('refinedstorage:speed_upgrade', [
        'QAQ',
        'AUA',
        'QQQ'
    ], {
        Q: 'refinedstorage:quartz_enriched_iron',
        A: 'the_vault:gem_alexandrite',
        U: 'refinedstorage:upgrade',
    })

    event.shaped('refinedstorage:stack_upgrade', [
        'QSQ',
        'SES',
        'QSQ'
    ], {
        Q: 'refinedstorage:quartz_enriched_iron',
        S: 'refinedstorage:speed_upgrade',
        E: 'the_vault:gem_echo'
    })

    event.shapeless('4x refinedstorage:cable', [
        'refinedstorage:quartz_enriched_iron',
        'the_vault:gem_larimar',
        'refinedstorage:quartz_enriched_iron',
        '#forge:silicon'
    ])
})