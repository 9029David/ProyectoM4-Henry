export interface INav { 
    id: number
    href: string
    title: string 
    icon: React.ReactNode
    isPrivate: boolean
    hiddenToPrivate: boolean
}