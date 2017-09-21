<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use Mail;

class EmailController extends Controller
{
    public function postContact(Request $request) {
    	$input = $request->all();
    	$data = array(
    		'name' => $input['name'],
    		'email' => $input['email'],
    		'phone' => $input['phone'],	
    		'bodyMessage' => $input['message']
    		);

    	Mail::send('emails.contact', $data, function($message) use ($data){
    		$message->from('info@www.gulfcoastpixel.com');
    		$message->to('info@GulfCoastPixel.com');
    		$message->subject('Contact Form Email');

    	});

    	return redirect('/#contact');
    }

}
