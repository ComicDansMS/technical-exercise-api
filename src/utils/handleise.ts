export default function handleise(string: string): string {
  return string.toLowerCase().replace(/ /g,'-');
}