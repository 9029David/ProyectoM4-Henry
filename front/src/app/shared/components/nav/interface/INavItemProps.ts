export interface INavItemProps {
    id: number,
    icon: React.ReactNode
    title: string
    className?: string
    href?: string
    onClick?: () => void
    isPrivate?: boolean
    isPublic?: boolean
}