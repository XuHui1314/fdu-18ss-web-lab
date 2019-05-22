<?php

    function outputOrderRow($file, $title, $quantity, $price) {
        echo "<tr>";
        $amount=$quantity*$price;
        echo "<td><img scr='images/books/tinysquare/$file'></td>";
        echo "<td>$title</td>";
        echo "<td class=\"mdl-data-table__cell--non-numeric\">$quantity</td>";
        echo "<td>$$price</td>";
        echo "<td>$$amount</td>";

        echo "</tr>";
    }
?>j