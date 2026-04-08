export type Row = { id: string; name: string; level: 'beginner' | 'advanced' };
export type Column = { key: keyof Row; label: string };
