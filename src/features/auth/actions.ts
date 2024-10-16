"use server";

import { AUTH_COOKIE } from "@/app/(auth)/constants";
import { cookies } from "next/headers";
import { Account, Client } from "node-appwrite";

export const getCurrent = async () => {
	try {
		const client = new Client()
			.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
			.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

		const session = cookies().get(AUTH_COOKIE);

		if (!session) return null;

		const account = new Account(client);
		return await account.get();
	} catch (error) {
		console.error('Error fetching the current user:', error);
		return null;
	}
}