import { NavigationProps } from "./Navigation.props";
import cn from "classnames";
import styles from "./Navigation.module.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export const Navigation = ({
	items,
	active = 1,
	className,
	...props
}: NavigationProps): JSX.Element => {
	const ref = useRef<HTMLElement>(null);

	const [navWidth, setNavWidth] = useState<number>(0);
	const [navHeight, setNavHeight] = useState<number>(0);
	const [navPosition, setNavPosition] = useState<"horizontal" | "vertical" | null>(null);
	const [activeElement, setActiveElement] = useState<number>(1);
	const [spotPostition, setSpotPosition] = useState<number>(0);

	useEffect(() => {
		navWidth < navHeight + 20 ? setNavPosition("vertical") : setNavPosition("horizontal");
	}, [navWidth, navHeight]);

	useEffect(() => {
		if (ref.current) {
			setNavWidth(ref.current.offsetWidth);
			setNavHeight(ref.current.offsetHeight);
		}
	}, []);

	useEffect(() => {
		let approxElementWidth = navWidth / items.length;
		let approxElementHeight = navHeight / items.length;

		const handleSetSpotPosition = (elementSize: number): void => {
			setSpotPosition(elementSize * (activeElement - 1) + elementSize / 2);
		};

		if (navPosition === "vertical") {
			handleSetSpotPosition(approxElementHeight);
		} else if (navPosition === "horizontal") {
			handleSetSpotPosition(approxElementWidth);
		} else {
			handleSetSpotPosition(0);
		}
	}, [activeElement, items.length, navWidth, navHeight, navPosition]);

	const getStylesObj = () => {
		if (navPosition === "horizontal") {
			return { left: spotPostition };
		} else if (navPosition === "vertical") {
			return { top: spotPostition };
		} else {
			return { top: 0, left: 0 };
		}
	};

	return (
		<nav className={cn(className, styles.nav)} ref={ref} {...props}>
			{items.map((item, idx) => (
				<Link key={item.id} legacyBehavior href={"#"}>
					<a
						className={cn(className, styles.item, {
							[styles.active]: activeElement === idx + 1,
						})}
						onClick={() => setActiveElement(idx + 1)}
					>
						{item.name}
					</a>
				</Link>
			))}
			<div
				className={cn(styles.spot, className, {
					[styles.horizontal]: navPosition === "horizontal",
					[styles.vertical]: navPosition === "vertical",
				})}
				style={getStylesObj()}
			></div>
		</nav>
	);
};
