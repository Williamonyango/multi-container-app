import express from 'express'
import authRoutes from './auth.routes.js'
import userRoutes from './users.routes.js'
import customerRoutes from './customers.routes.js'
import meterRoutes from './meters.routes.js'
import readingRoutes from './readings.routes.js'
import tariffRoutes from './tariffs.routes.js'
import invoiceRoutes from './invoices.routes.js'
import paymentRoutes from './payments.routes.js'
import notificationRoutes from './notifications.routes.js'
import reportRoutes from './reports.routes.js'
import auditlogRoutes from './auditlogs.routes.js'
import feedbackRoutes from './feedback.routes.js'

const router = express.Router()

router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/customers', customerRoutes)
router.use('/meters', meterRoutes)
router.use('/readings', readingRoutes)
router.use('/tariffs', tariffRoutes)
router.use('/invoices', invoiceRoutes)
router.use('/payments', paymentRoutes)
router.use('/notifications', notificationRoutes)
router.use('/reports', reportRoutes)
router.use('/audit-logs', auditlogRoutes)
router.use('/feedback', feedbackRoutes)

export default router


