type Section = 'Education' | 'Work' | 'Other'

interface LifeEvent {
    id: number;
    title: string;
    date: string;
    section: string;
    desc?: string;
    stack?: string[];
}
