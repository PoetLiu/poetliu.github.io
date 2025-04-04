import Social from "./Social";

const iconStyle= {
      marginLeft: 2,
      marginRight: 2,
      marginBottom: 2,
  };

function Footer() {
    return (
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    <svg class="bi" width="30" height="24"></svg>
                </a>
                <span class="mb-3 mb-md-0 text-body-secondary">© 2025 Albert.Dev</span>
            </div>

            <Social iconStyle = {iconStyle}></Social>
        </footer>
    );
}

export default Footer;