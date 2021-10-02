import Head from "next/head";
import styles from "../styles/Home.module.css";
import useBearStore from "../src/store/useBearStore";
import { Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

export default function Home() {
	const { bears, increasePopulation, removeAllBears } = useBearStore();

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Heading mb="5">🐻Bear population {bears}🐻</Heading>
			<Flex>
				<Button onClick={increasePopulation} mr="2">
					Increase 😍
				</Button>
				<Button onClick={removeAllBears}>Reset 😨</Button>
			</Flex>
		</div>
	);
}
