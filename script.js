$(document).ready(function () {
    // search
    $("#search").keyup(function (e) {
        let keyword = $(this).val();
        if (keyword.length) {
            $.ajax({
                url: "/",
                method: "GET", // First change type to method here
                data: {
                    keyword: keyword,
                },
                success: function (response) {
                    const data = [];
                    for (let index = 0; index < 10; index++) {
                        data.push(
                            `<a href="https://dev.denijewelry.com/product.php?search=alphabet" class="list-group-item list-group-item-action border-0 px-2 py-1 my-1 bg-light-grey-hover"> Product ` +
                                index +
                                `</a>`,
                        );
                    }

                    $("#category_results").removeClass("d-none");
                    $("#category_results").html(data);
                },
            });
        } else {
            $("#category_results").html(
                `<p>Type a keyword to find products</p>`,
            );
        }
    });
});
