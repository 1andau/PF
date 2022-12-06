import React from 'react';
import sticker from '../../assets/images/space.png';
import { SidebarData } from './data';
import { useDispatch } from 'react-redux';
import { setIsMenuOpened } from '../../redux/slice';
import styles from './header.module.scss'
import { Link } from 'react-router-dom';

interface NavItemProps {
	title: string;
	path: string;
}

export const Header = () => {
  const dispatch = useDispatch(); 
  const [isOpen, setIsOpen] = React.useState(false);
	const buttonRef = React.useRef<HTMLButtonElement>(
		null
	) as React.MutableRefObject<HTMLButtonElement>;
	const asideRef = React.useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;

  return (
    <>
		<header className={styles.header}>
			<div className={styles.container}>
				<Link className={styles.header__logo} to="/">
          <img className={styles.logo} src={sticker} alt="" />
				</Link>
        <nav className={styles.header__nav}>
					<ul className={styles.header__nav_list}>
						
						{SidebarData.map(({ title, path }: NavItemProps, i: number) => (
							<li key={title} style={{ animationDelay: `${i * 0.1 + 0.1}s` }}>
								<a href={`#${path}`}>{title}</a>
							</li>
						))}
					</ul>

					
				</nav>
	
				<button
					className={`${styles.header__hamburger} ${isOpen ? styles.header__hamburger_active : ""}`}
					onClick={() => setIsOpen(!isOpen)}
					ref={buttonRef}
					type="button"
				>
					<svg height="32" width="32">
						<line className={styles.header__hamburger_top} x1="10%" y1="20%" x2="50%" y2="20%" />
						<line className={styles.header__hamburger_middle} x1="10%" y1="50%" x2="90%" y2="50%" />
						<line className={styles.header__hamburger_bottom} x1="50%" y1="80%" x2="90%" y2="80%" />
					</svg>
				</button>
				
				<aside
					ref={asideRef}
					className={`${styles.header__menu} ${isOpen ? styles.header__menu_open : ""}`}
					aria-hidden={!isOpen}
					tabIndex={isOpen ? 1 : -1}
				>
					<nav>
						<ul className={styles.header__menu_list}>
	
{SidebarData.map(({ title, path }: NavItemProps) => (
<li key={title}>
<a href={`#${path}`}
aria-hidden={!isOpen}
onClick={() => setIsOpen(!isOpen)}
tabIndex={isOpen ? 1 : -1}
>
{title}

</a>
</li>
))}

						</ul>
					</nav>
				</aside>
				{isOpen && (
					<button onClick={() => setIsOpen(!isOpen)} className={styles.header__backdrop}></button>
				)}
			</div>
		</header>
    </>
  );
};

