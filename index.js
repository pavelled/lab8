$(function () {
    let from = $('#from');
    let to = $('#to');
    let func = $('#func');
    let btn = $('#plot_btn');
    let plot = $('#plot');

    btn.click(function (e) {
        e.preventDefault();

        let from_val = parseFloat(from.val());
        let to_val = parseFloat(to.val());

        let values = []

        for (let x = from_val; x <= to_val; x += 0.1) {
            values.push([x, eval(func.val())])
        }

        $.plot(plot, [values], {})
    });
})