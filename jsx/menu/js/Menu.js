function Menu({items, opened}) {
	if (opened) {
		return (
			<div className="menu menu-open">
			  <div className="menu-toggle"><span></span></div>
			  <nav>
			    <ul>
			      <li><a href="#home">Главная страница</a></li>
			      <li><a href="#about">О компании</a></li>
			      <li><a href="#contact">Контакты</a></li>
			    </ul>
			  </nav>
			</div>
		);
	}
	return (
		<div className="menu">
		  <div className="menu-toggle"><span></span></div>
		</div>
	);	
}