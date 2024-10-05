export function generateUniqueId() {
    return `id_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
}