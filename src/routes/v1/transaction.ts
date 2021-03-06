import express from 'express';
import * as TransactionController from '../../controllers/transaction';
import * as CustomerMiddleware from '../../middlewares/customer';
import * as TransactionValidation from '../../validations/transaction';

const router = express.Router();

// Authentication and authorization
router.use(CustomerMiddleware.validateCustomerToken);

// Get transactions
router.post(
  '/',
  TransactionValidation.validateGetTransactions,
  TransactionController.getTransactions,
);

export default router;