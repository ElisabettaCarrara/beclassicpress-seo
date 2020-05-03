<?php
/**
 * Functions and actions related to updates.
 *
 * @since      0.3.0
 * @package    Classic_SEO
 * @subpackage Classic_SEO\Core
 */

namespace Classic_SEO;

use Classic_SEO\Traits\Hooker;


defined( 'ABSPATH' ) || exit;

/**
 * Updates class
 */
class Updates implements Runner {

	use Hooker;

	/**
	 * Updates that need to be run
	 *
	 * @var array
	 */
	private static $updates = [

	];
	
	/**
	 * Updates that need to be run
	 *
	 * @var array
	 */
	private static $pre_release_updates = [
		'1.0.0'   => 'updates/update-1.0.0-beta.4.php',
	];

	/**
	 * Register hooks.
	 */
	public function hooks() {
		$this->action( 'admin_init', 'do_updates' );
	}

	/**
	 * Check if any update is required.
	 */
	public static function do_updates() {
		$installed_version = get_option( 'cpseo_version' );
		$pre_release_installed_version = get_option( 'cpseo_pre_release_version' );

		// Maybe it's the first install.
		if ( ! $installed_version ) {
			return;
		}

		if ( version_compare( $installed_version, cpseo()->version, '<' ) ) {
			self::perform_updates();
		}
		
		// TODO: What if cpseo_pre_release_version does not exist????
		
		if ( version_compare( $pre_release_installed_version, cpseo()->pre_release_version, '<' ) ) {
			self::perform_pre_release_updates();
		}
	}

	/**
	 * Perform all updates.
	 */
	public static function perform_updates() {
		$installed_version = get_option( 'cpseo_version' );
		
		if ( ! empty(self::$updates ) ) {
			foreach ( self::$updates as $version => $path ) {
				if ( version_compare( $installed_version, $version, '<' ) ) {
					include $path;
					update_option( 'cpseo_version', $version );	// If the option does not exist, then the option will be added with the option value
				}
			}
		}

		// Save install date.
		if ( false === boolval( get_option( 'cpseo_install_date' ) ) ) {
			update_option( 'cpseo_install_date', current_time( 'timestamp' ) );
		}

		update_option( 'cpseo_version', cpseo()->version );
		update_option( 'cpseo_db_version', cpseo()->db_version );
	}
	
	/**
	 * Perform pre-release updates.
	 */
	public static function perform_pre_release_updates() {
		$pre_release_installed_version = get_option( 'cpseo_pre_release_version' );
		
		if ( ! empty(self::$pre_release_updates ) ) {
			foreach ( self::$pre_release_updates as $pre_release_version => $path ) {
				if ( version_compare( $pre_release_installed_version, $pre_release_version, '<' ) ) {
					include $path;
					update_option( 'cpseo_pre_release_version', $pre_release_version );
				}
			}
		}

		update_option( 'cpseo_pre_release_version', cpseo()->pre_release_version );
	}

}
