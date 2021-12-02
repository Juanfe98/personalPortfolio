export const capitalizeEachWord = (word) => {
	const finalSentence = word.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}
