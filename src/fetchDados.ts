export default async function fetchDados<T>(url: string): Promise<T | null> {
    try{
        const response = await fetch(url);
        if (!response.ok) throw new Error('Erro ao executar a requisição HTTP');
        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error("fetchDados: " + error.message);
        }
        return null
    }
}