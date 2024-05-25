console.info('Adding custom items!')

onEvent('item.registry', event => {

	event.create('the_vault:extraordinary_larimar').displayName('Extraordinary Larimar Gem')
	event.create('the_vault:extraordinary_benitoite').displayName('Extraordinary Benitoite Gem')
	event.create('the_vault:extraordinary_wutodie').displayName('Extraordinary Wutodie Gem')
	event.create('the_vault:extraordinary_alexandrite').displayName('Extraordinary Alexandrite Gem')
	event.create('the_vault:extraordinary_painite').displayName('Extraordinary Painite Gem')
	event.create('the_vault:extraordinary_black_opal').displayName('Extraordinary Black Opal Gem')
	event.create('the_vault:extraordinary_echo_gem').displayName('Extraordinary Echo Gem')

	event.create('evil_omega_pog').displayName('Corrupted Omega POG')
	event.create('weaker_omega_pog').displayName('Weaker Omega POG')
	
	//shapes for the gudie book
	event.create('shape_diamond').displayName('Diamond Shape')
	event.create('shape_square').displayName('Square Shape')
	event.create('shape_triangle').displayName('Triangle Shape')
	event.create('shape_circle').displayName('Circle Shape')
	event.create('shape_spiral').displayName('Spiral Shape')
})