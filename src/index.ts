function print(m: string): void {
	console.log(m);
}

function sayHello(): Promise<void> {
	return Promise.resolve(print("Hello!"));
}

export {
	print,
	sayHello
};
