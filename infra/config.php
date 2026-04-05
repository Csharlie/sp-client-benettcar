<?php
/**
 * Benettcar client overlay config for Spektra API plugin.
 *
 * Loaded by spektra-api.php via Strategy B (ENV var / symlink fallback).
 * This file MUST return an associative array.
 *
 * @package Spektra\Client\Benettcar
 */

defined( 'ABSPATH' ) || exit;

return [

	// ── Client identity ──────────────────────────────────────────
	'client_slug' => 'benettcar',
	'client_name' => 'Benett Car',

	// ── CORS ─────────────────────────────────────────────────────
	// Origins allowed to call the REST endpoint.
	// Vite dev server uses port 5174 (explicit in vite.config.ts).
	'allowed_origins' => [
		'http://localhost:5174',
	],

	// ── Site defaults ────────────────────────────────────────────
	// Fallback values when ACF fields are empty or missing.
	'site_defaults' => [
		'lang'  => 'hu',
		'title' => 'Benett Car',
	],

	// ── Sections ─────────────────────────────────────────────────
	// ACF field group slugs that map to SiteData sections.
	// Order matches the frontend rendering order.
	'sections' => [
		'bc-hero',
		'bc-brand',
		'bc-services',
		'bc-why-us',
		'bc-fleet',
		'bc-reviews',
		'bc-faq',
		'bc-blog',
		'bc-contact',
		'bc-footer',
	],

];
