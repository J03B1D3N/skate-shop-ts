export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <div className="footer">
            Copyright @ Justas Lapienė {currentYear}
        </div>
    )
}