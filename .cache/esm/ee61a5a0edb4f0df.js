let Trade,CustomErrorHandler;_edb‍.x([["default",()=>_edb‍.o]]);_edb‍.w("../models",[["Trade",["Trade"],function(v){Trade=v}]]);_edb‍.w("../services",[["CustomErrorHandler",["CustomErrorHandler"],function(v){CustomErrorHandler=v}]]);


const tradecontroller = {

	async trades(req, res, next) {

		const { symbol, shares, price } = req.body;

		if (!symbol || !shares || !price) {

			return next(CustomErrorHandler.notFound('symbol shares and price are not found'))
			 
		}

	
		const trade = await Trade.create({symbol,shares,price})


		if (trade) {

			return res.json({symbol:symbol , shares:shares,price:price})
	

		}

		  res.json({message:'trade not  found'})

		


	}
  

}

_edb‍.d(tradecontroller);