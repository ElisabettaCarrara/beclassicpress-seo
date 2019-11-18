<?php
/**
 * The Person Class.
 *
 * @since      0.1.8
 * @package    Classic_SEO
 * @subpackage Classic_SEO\RichSnippet

 */

namespace Classic_SEO\RichSnippet;

use Classic_SEO\Helper;

defined( 'ABSPATH' ) || exit;

/**
 * Person class.
 */
class Person implements Snippet {

	/**
	 * Person rich snippet.
	 *
	 * @param array  $data   Array of JSON-LD data.
	 * @param JsonLD $jsonld JsonLD Instance.
	 *
	 * @return array
	 */
	public function process( $data, $jsonld ) {
		$entity = [
			'@context'    => 'https://schema.org',
			'@type'       => 'Person',
			'name'        => $jsonld->parts['title'],
			'description' => $jsonld->parts['desc'],
			'email'       => Helper::get_post_meta( 'snippet_person_email' ),
			'gender'      => Helper::get_post_meta( 'snippet_person_gender' ),
			'jobTitle'    => Helper::get_post_meta( 'snippet_person_job_title' ),
		];

		$jsonld->set_address( 'person', $entity );

		return $entity;
	}
}
