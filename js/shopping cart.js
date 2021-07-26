$( document ).ready(function() {
   $('.addCart').click(function(){
      var name = $(this).attr('nameProduct'),
          number = parseInt($('input[nameProduct='+name+']').val()),
          pricePer = parseInt($('.price-product[nameProduct='+name+']').html()),
          totalPrice = parseInt($('.totalPrice[nameProduct='+name+']').html()),
          method = $(this).attr('method');
      //Bấm vào cộng thì tăng giá trị lên 1 rồi set value cho input
      if (method =='minus'){
         if (number == 0 ){
            number = 0;

         }
         else{
            number = number - 1;
            totalPrice -= pricePer;

         }

      }
      else{
         number = number + 1;
         totalPrice += pricePer
      }
      $('input[nameProduct='+name+']').val(number);
      $('.totalPrice[nameProduct='+name+']').html(totalPrice);
      totalAmount();

   });
})

function totalAmount(){
      var totalProductElement = $('.totalPrice'),
          totalAmount = 0;
      for (var i = 0; i < totalProductElement.length; i ++){
         var item =  totalProductElement[i],
             totalPerProduct = parseInt($(item).html());
         totalAmount += totalPerProduct;
      }
      var shippingCharge = parseInt($('#shipping_charge').html());
      var totalAmountPayment = shippingCharge+totalAmount;
      $('#product_total_amt').html(totalAmount);
      $('#total_cart_amt').html(totalAmountPayment);
}
