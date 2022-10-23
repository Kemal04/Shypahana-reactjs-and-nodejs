import React from 'react'

function Sidebar() {
    return (
        <nav class="sidebar">
            <div class="logo d-flex justify-content-between">
                <a href="index.html"><img src="img/logo.png" alt=""/></a>
                <div class="sidebar_close_icon d-lg-none">
                    <i class="ti-close"></i>
                </div>
            </div>
            <ul id="sidebar_menu" class="metismenu">
                <li class="side_menu_title">
                    <span>Dashboard</span>
                </li>
                <li class="mm-active">
                    <a class="has-arrow" href="#" aria-expanded="true">

                        <img src="img/menu-icon/1.svg" alt=""/>
                            <span>Dashboard</span>
                    </a>
                    <ul class="mm-collapse mm-show">
                        <li><a class="active" href="index.html">Dashboard 1</a></li>
                        <li><a href="index_2.html">Dashboard 2</a></li>
                    </ul>
                </li>
                <li class="side_menu_title">
                    <span>Applications</span>
                </li>
                <li class="">
                    <a class="has-arrow" href="#" aria-expanded="false">
                        <img src="img/menu-icon/2.svg" alt=""/>
                            <span>Pages</span>
                    </a>
                    <ul class="mm-collapse">
                        <li><a href="login.html">Login</a></li>
                        <li><a href="resister.html">Register</a></li>
                        <li><a href="forgot_pass.html">Forgot Password</a></li>
                    </ul>
                </li>
                <li class="">
                    <a class="has-arrow" href="#" aria-expanded="false">
                        <img src="img/menu-icon/3.svg" alt="/"/>
                            <span>Applications</span>
                    </a>
                    <ul class="mm-collapse">
                        <li><a href="mail_box.html">Mail Box</a></li>
                        <li><a href="chat.html">Chat</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                    </ul>
                </li>
                <li class="side_menu_title">
                    <span>Components</span>
                </li>
                <li class="">
                    <a class="has-arrow" href="#" aria-expanded="false">
                        <img src="img/menu-icon/4.svg" alt=""/>
                            <span>UI Component</span>
                    </a>
                    <ul class="mm-collapse">
                        <li><a href="#">Elements</a>
                            <ul class="mm-collapse">
                                <li><a href="buttons.html">Buttons</a></li>
                                <li><a href="dropdown.html">Dropdowns</a></li>
                                <li><a href="Badges.html">Badges</a></li>
                                <li><a href="Loading_Indicators.html">Loading Indicators</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Components</a>
                            <ul class="mm-collapse">
                                <li><a href="notification.html">Notifications</a></li>
                                <li><a href="progress.html">Progress Bar</a></li>
                                <li><a href="carousel.html">Carousel</a></li>
                                <li><a href="cards.html">cards</a></li>
                                <li><a href="Pagination.html">Pagination</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="">
                    <a class="has-arrow" href="#" aria-expanded="false">
                        <img src="img/menu-icon/5.svg" alt=""/>
                            <span>Widgets</span>
                    </a>
                    <ul class="mm-collapse">
                        <li><a href="chart_box_1.html">Chart Boxes 1</a></li>
                        <li><a href="profilebox.html">Profile Box</a></li>
                    </ul>
                </li>
                <li class="">
                    <a class="has-arrow" href="#" aria-expanded="false">
                        <img src="img/menu-icon/6.svg" alt=""/>
                            <span>Forms</span>
                    </a>
                    <ul class="mm-collapse">
                        <li><a href="#">Elements</a>
                            <ul class="mm-collapse">
                                <li><a href="data_table.html">Data Tables</a></li>
                                <li><a href="bootstrap_table.html">Grid Tables</a></li>
                                <li><a href="datepicker.html">Date Picker</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Widgets</a>
                            <ul class="mm-collapse">
                                <li><a href="Input_Selects.html">Input Selects</a></li>
                                <li><a href="Input_Mask.html">Input Mask</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="">
                    <a class="has-arrow" href="#" aria-expanded="false">
                        <img src="img/menu-icon/7.svg" alt=""/>
                            <span>Charts</span>
                    </a>
                    <ul class="mm-collapse">
                        <li><a href="chartjs.html">ChartJS</a></li>
                        <li><a href="apex_chart.html">Apex Charts</a></li>
                        <li><a href="chart_sparkline.html">Chart sparkline</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar